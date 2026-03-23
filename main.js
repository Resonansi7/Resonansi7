/**
 * Resonansi7 - Proactive Orchestration Core (POC)
 * v1.2.0 - Integrated Strategic Intervention Logic (NIK).
 * Architect: Adiguna Sopyan, MPP
 */

const newsOSINT = require('./adapters/news_osint');
const bsm = require('./core/blindspot_mapper');
const waHarmonizer = require('./adapters/wa_bridge');
const nexus = require('./core/causal_nexus');
const narrativeEngine = require('./core/narrative_engine');
const interventionLogic = require('./core/intervention_logic'); // [ADD]

async function initiateSovereignCycle() {
    console.log("=================================================");
    console.log("   RESONANSI7 v1.2.0 - SOVEREIGN AI OPERATOR     ");
    console.log("=================================================\n");

    const newsSignals = await newsOSINT.scanGlobalNews();
    console.log(`[ORCHESTRATOR] Found ${newsSignals.length} potential regulatory signals.`);

    for (const news of newsSignals) {
        const amplification = nexus.detectLink(news);
        const finalScore = news.impactScore + amplification;
        const isSystemicRisk = finalScore > 7.0;

        if (isSystemicRisk) {
            console.log(`\n[ALERT] High-risk signal detected: "${news.title}"`);
            
            const analysis = bsm.analyzeRegulatoryGap({
                domain: news.source,
                impact: finalScore
            });

            // [ADD] Ambil prosedur intervensi konkret
            const sop = interventionLogic.getProcedures({
                domain: news.source + " " + news.title
            });

            const brief = narrativeEngine.generateBrief({
                domain: news.source,
                impact: finalScore,
                recommendation: analysis.recommendation
            });

            console.log(brief);
            console.log("STRATEGIC PROCEDURES (SOP):");
            sop.forEach((step, i) => console.log(`${i+1}. ${step}`));

            const finalAlert = `[Resonansi7 ALERT]\nSignal: ${news.title}\nScore: ${finalScore.toFixed(1)}\nSOP: ${sop[0]} (and ${sop.length-1} more).`;
            await waHarmonizer.sendStrategicAlert("628123456789", finalAlert);
        } else {
            console.log(`[IGNORE] Signal: "${news.title}" (Score: ${finalScore.toFixed(1)})`);
        }
    }

    console.log("\n[STATUS] Cycle Complete. Monitoring standing by...");
}

initiateSovereignCycle().catch(console.error);