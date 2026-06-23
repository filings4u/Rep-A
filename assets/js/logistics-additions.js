/**
 * filings4u Platform Architecture
 * Module: logistics-additions.js (Part 1 - Strategic Fleet Pipelines)
 */

window.FILINGS4U_LOGISTICS_ADDITIONS_TARGET = "filings4u-logistics-additions-root";

function renderMasterLogisticsAdditionsEngine(overrideTargetId) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_LOGISTICS_ADDITIONS_TARGET || "filings4u-logistics-additions-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // Resolve active path configuration parameters
        let slug = "mcs-150-update";
        const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
        if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
            slug = rawPathname.replace(".html", "");
        }

        var additionsHTML = "";

        // Only run informational copy blocks if page matches target expansions
        if (slug !== "mcs-150-update" && slug !== "ifta-quarterly-returns" && slug !== "boc-3-amendment") {
            return;
        }

        // 1. OPEN EXTRA INFORMATION BLOCK GRID LAYOUT CANVAS (Constrained strictly to 1450px max-width) [INDEX]
        additionsHTML += '<section class="f4u-logistics-additions-section" style="background: #ffffff; padding: 60px 0 90px 0; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; display: block; margin: 0 !important; border-top: 1px solid #e2e8f0;">';
        additionsHTML += '  <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">';
        additionsHTML += '    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 50px; box-shadow: 0 10px 30px -5px rgba(10,31,68,0.02); box-sizing: border-box; width: 100%; text-align: left;">';
        additionsHTML += '      <div style="font-size: 0.95rem; line-height: 1.6; color: #334155; max-width: 1100px; margin: 0 auto; box-sizing: border-box; width: 100%;">';

        // 2. PIPELINE CONDITION 1: MCS-150 BIENNIAL UPDATE MANIFEST [INDEX]
        if (slug === "mcs-150-update") {
            additionsHTML += '        <h2 style="color: #0a1f44; font-size: 1.5rem; font-weight: 800; border-left: 4px solid #10b981; padding-left: 14px; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 0.5px;">Statutory MCS-150 Operational Overview</h2>';
            additionsHTML += '        <p style="margin: 0 0 20px 0; font-size: 1.05rem; font-weight: 500; color: #0a1f44;">Federal motor carrier safety administration rules require all active logistics transits to file an updated MCS-150 tracking report every 24 months to maintain valid USDOT status numbers.</p>';
            additionsHTML += '        <p style="margin: 0 0 24px 0;">Failing to submit your biennial update loops by your specific calendar target can trigger immediate registration shutdowns and fines up to $1,000 per day. Our platform synchronizes your fleet size changes, commercial mileage parameters, and cargo matrix records to authorize clean clearance tracking records automatically.</p>';
            
            additionsHTML += '        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px; margin-bottom: 24px; box-sizing: border-box; width: 100%;">';
            additionsHTML += '          <h4 style="color: #0a1f44; font-size: 1rem; font-weight: 700; margin: 0 0 12px 0; text-transform: uppercase;">Required Verification Parameters</h4>';
            additionsHTML += '          <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; color: #475569; font-size: 0.9rem;">';
            additionsHTML += '            <li>• Certified USDOT Identification Number</li>';
            additionsHTML += '            <li>• Active Fleet Vehicle Count &amp; Weight Brackets</li>';
            additionsHTML += '            <li>• Recent Annual Commercial VMT Mileage Logs</li>';
            additionsHTML += '            <li>• Hazardous Material Transit Classifications</li>';
            additionsHTML += '          </ul>';
            additionsHTML += '        </div>';
        }

        // 3. PIPELINE CONDITION 2: IFTA QUARTERLY RETURNS MANIFEST [INDEX]
        if (slug === "ifta-quarterly-returns") {
            additionsHTML += '        <h2 style="color: #0a1f44; font-size: 1.5rem; font-weight: 800; border-left: 4px solid #10b981; padding-left: 14px; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 0.5px;">Statutory IFTA Quarterly Reporting Manifest</h2>';
            additionsHTML += '        <p style="margin: 0 0 20px 0; font-size: 1.05rem; font-weight: 500; color: #0a1f44;">Commercial motor vehicles operating across multiple jurisdictions must track and submit fuel tax distributions every quarter under International Fuel Tax Agreement parameters.</p>';
            additionsHTML += '        <p style="margin: 0 0 24px 0;">Filing accurate returns requires aggregating state-by-state distance ledgers and fuel receipts. Our platform processes your raw logistics records to calculate fuel usage variances automatically, saving you from late balance penalties and compliance audits.</p>';
            
            additionsHTML += '        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px; margin-bottom: 24px; box-sizing: border-box; width: 100%;">';
            additionsHTML += '          <h4 style="color: #0a1f44; font-size: 1rem; font-weight: 700; margin: 0 0 12px 0; text-transform: uppercase;">Reporting Target Windows</h4>';
            additionsHTML += '          <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; color: #475569; font-size: 0.9rem;">';
            additionsHTML += '            <li>• Quarter 1 (January – March): Due April 30</li>';
            additionsHTML += '            <li>• Quarter 2 (April – June): Due July 31</li>';
            additionsHTML += '            <li>• Quarter 3 (July – September): Due October 31</li>';
            additionsHTML += '            <li>• Quarter 4 (October – December): Due January 31</li>';
            additionsHTML += '          </ul>';
            additionsHTML += '        </div>';
        }

        // 4. PIPELINE CONDITION 3: BOC-3 PROCESS AGENT AMENDMENT [INDEX]
        if (slug === "boc-3-amendment") {
            additionsHTML += '        <h2 style="color: #0a1f44; font-size: 1.5rem; font-weight: 800; border-left: 4px solid #10b981; padding-left: 14px; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 0.5px;">Statutory BOC-3 Amendment Infrastructure</h2>';
            additionsHTML += '        <p style="margin: 0 0 20px 0; font-size: 1.05rem; font-weight: 500; color: #0a1f44;">When a logistics carrier alters its corporate structure, moves its primary address, or modifies its designated legal agents, an official BOC-3 amendment must be processed with the FMCSA.</p>';
            additionsHTML += '        <p style="margin: 0 0 24px 0;">Maintaining active, valid process agent coverage across all 48 contiguous states is a mandatory federal operational requirement. Failing to update changes to your legal agent network can cause immediate authority suspensions. Our portal submits your modified agent allocations directly into the federal mainframe registries securely.</p>';
            
            additionsHTML += '        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px; margin-bottom: 24px; box-sizing: border-box; width: 100%;">';
            additionsHTML += '          <h4 style="color: #0a1f44; font-size: 1rem; font-weight: 700; margin: 0 0 12px 0; text-transform: uppercase;">Amendment Filing Triggers</h4>';
            additionsHTML += '          <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; color: #475569; font-size: 0.9rem;">';
            additionsHTML += '            <li>• Adjustments to Master Corporate Addresses</li>';
            additionsHTML += '            <li>• Legal Name Changes or Transferred Authority Ownership</li>';
            additionsHTML += '            <li>• Updates to Designated State Legal Representation Profiles</li>';
            additionsHTML += '          </ul>';
            additionsHTML += '        </div>';
        }

        // CLOSE MAIN CONTENT CARDS AND CONTAINERS [INDEX]
        additionsHTML += '      </div>';
        additionsHTML += '    </div>';
        additionsHTML += '  </div>';
        additionsHTML += '</section>';

        // 5. Mount the complete responsive markup string back to the page node safely [INDEX]
        zone.setAttribute("data-additions-cache", additionsHTML);
        zone.innerHTML = additionsHTML;
        zone.removeAttribute("data-additions-cache");

    } catch (err) {
        console.error("Logistics additions engine initialization crash:", err);
    }
}
window.renderMasterLogisticsAdditionsEngine = renderMasterLogisticsAdditionsEngine;

