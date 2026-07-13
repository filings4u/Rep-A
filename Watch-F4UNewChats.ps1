# ============================================================================
# 📡 FILINGS4U INITIALIZATION RADAR (NEW CHAT ALERTS)
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

if ($null -eq $GlobalAlertedClientsCache) { $GlobalAlertedClientsCache = @{} }

Write-Host "📡 [F4U Monitor] Live chat arrival tracking loop deployed..." -ForegroundColor Cyan

while ($true) {
    Try {
        $TimeBufferString = (Get-Date).ToUniversalTime().AddMinutes(-10).ToString("yyyy-MM-ddTHH:mm:ssZ")
        $RestTargetUrl = "$($Global:SupabaseProjectUrl)/rest/v1/wizard_intake_sessions?created_at=gt.$TimeBufferString&select=*"
        $ActiveFormSubmissions = Invoke-RestMethod -Uri $RestTargetUrl -Headers $F4uSupabaseHeaders -Method Get -ErrorAction SilentlyContinue

        foreach ($Session in $ActiveFormSubmissions) {
            $ClientUUID = $Session.client_id
            if (-not $GlobalAlertedClientsCache.ContainsKey($ClientUUID)) {
                $GlobalAlertedClientsCache[$ClientUUID] = $true
                $ClientName = "$($Session.first_name) $($Session.last_name)"
                
                Write-Host "🔔 New Chat Located: $ClientName" -ForegroundColor Yellow

                $AlertHtmlBody = "<h3>Live Wizard Session Initialized</h3><p><strong>Customer:</strong> $ClientName</p><p><strong>UUID:</strong> $ClientUUID</p><br><a href='https://filings4u.com'>Open Admin Desk</a>"
                $ResendPayloadJson = @{ 
                    from    = "onboarding@resend.dev"
                    to      = @($InternalNotifyEmail)
                    subject = "🚨 [NEW CHAT CHOP] Live Session Started - $ClientName"
                    html    = $AlertHtmlBody 
                } | ConvertTo-Json -Depth 4 -Compress
                
                $TempPath = Join-Path $PSScriptRoot "resend_alert_temp.json"
                [System.IO.File]::WriteAllText($TempPath, $ResendPayloadJson, [System.Text.Encoding]::UTF8)
                
                & curl.exe -X POST "https://resend.com" `
                  -H "Authorization: Bearer $($Global:ResendSecretToken)" `
                  -H "Content-Type: application/json" `
                  -d "@$TempPath" `
                  --silent
                  
                if (Test-Path $TempPath) { Remove-Item $TempPath -Force }
            }
        }
    } Catch {}
    Start-Sleep -Seconds 5
}