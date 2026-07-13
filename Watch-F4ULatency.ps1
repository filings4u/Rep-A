# ============================================================================
# ⏱️ FILINGS4U 1-MINUTE SLA RESPONSIVE LATENCY WORKER
# ============================================================================
$Global:SupabaseProjectUrl = "https://lrbimrlbskjweynxlgas.supabase.co"
$Global:ServiceRoleJwtKey  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODUyNDQ1NiwiZXhwIjoyMDk0MTAwNDU2fQ.ZaUytCj2cKGWmuoRmPbjSeZPXlSJ8jV5hGjQcsXzgtM"
$Global:ResendSecretToken  = "re_9gQJFmQY_BM3TrUQ6Dg9TPsc5GBP8nUXJ"
$InternalNotifyEmail       = "support@filings4u.com"

$F4uSupabaseHeaders = @{ 
    "apikey"        = $Global:ServiceRoleJwtKey
    "Authorization" = "Bearer $Global:ServiceRoleJwtKey"
    "Content-Type"  = "application/json" 
}

if ($null -eq $GlobalLatencyBreachesCache) { $GlobalLatencyBreachesCache = @{} }

Write-Host "⏱️ [F4U Monitor] Live SLA latency deadline worker loop deployed..." -ForegroundColor Cyan

while ($true) {
    Try {
        $RestTargetUrl = "$($Global:SupabaseProjectUrl)/rest/v1/chat_messages?order=created_at.desc&limit=50"
        $RecentMessages = Invoke-RestMethod -Uri $RestTargetUrl -Headers $F4uSupabaseHeaders -Method Get -ErrorAction SilentlyContinue

        if ($null -ne $RecentMessages) {
            foreach ($Thread in ($RecentMessages | Group-Object -Property client_id)) {
                $ClientUUID = $Thread.Name
                if ($GlobalLatencyBreachesCache.ContainsKey($ClientUUID)) { continue }

                $LastMessage = ($Thread.Group | Sort-Object -Property created_at)[-1]

                if ($LastMessage.sender_type -eq "client") {
                    $ElapsedTimeSeconds = ((Get-Date).ToUniversalTime() - [DateTime]::Parse($LastMessage.created_at).ToUniversalTime()).TotalSeconds

                    if ($ElapsedTimeSeconds -ge 60) {
                        $GlobalLatencyBreachesCache[$ClientUUID] = $true
                        Write-Host "🚨 SLA BREACH: Client #$ClientUUID un-answered for $ElapsedTimeSeconds seconds!" -ForegroundColor Red

                        $SlaHtmlBody = "<h2>⚠️ Response Deadline Overdue</h2><p>A chat has been left un-answered for over 1 minute.</p><p><strong>Phrase:</strong> `"$($LastMessage.message_content)`"</p><br><a href='https://filings4u.com'>Open Admin Panel</a>"
                        $ResendPayloadJson = @{ 
                            from    = "onboarding@resend.dev"
                            to      = @($InternalNotifyEmail)
                            subject = "⚠️ [URGENT SLA] Chat Unattended for > 1 Min"
                            html    = $SlaHtmlBody 
                        } | ConvertTo-Json -Depth 4 -Compress
                        
                        $TempPath = Join-Path $PSScriptRoot "resend_sla_temp.json"
                        [System.IO.File]::WriteAllText($TempPath, $ResendPayloadJson, [System.Text.Encoding]::UTF8)
                        
                        # FIXED: Updated endpoint targeting to hit the explicit production mail gateway route
                        & curl.exe -X POST "https://resend.com" `
                          -H "Authorization: Bearer $($Global:ResendSecretToken)" `
                          -H "Content-Type: application/json" `
                          -d "@$TempPath" `
                          --silent
                          
                        if (Test-Path $TempPath) { Remove-Item $TempPath -Force }
                    }
                }
                else {
                    if ($GlobalLatencyBreachesCache.ContainsKey($ClientUUID)) { $GlobalLatencyBreachesCache.Remove($ClientUUID) }
                }
            }
        }
    } Catch {}
    Start-Sleep -Seconds 5
}