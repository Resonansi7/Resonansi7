/**
 * Resonansi7 - Crisis Simulation Suite
 * Purpose: Testing full orchestration logic (Nexus + SOP) without live RSS.
 * Architect: Adiguna Sopyan, MPP
 */

const bsm = require('../core/blindspot_mapper');
const nexus = require('../core/causal_nexus');
const narrativeEngine = require('../core/narrative_engine');
const interventionLogic = require('../core/intervention_logic');

const simulatedScenarios = [
    {
        title: "Laporan gangguan teknis pada gateway server kementerian",
        source: "Internal_Monitor",
        impactScore: 5.5
    },
    {
        title: "Deteksi akses ilegal (peretasan) pada database kependudukan nasional",
        source: "Cyber_Security_Node",
        impactScore: 7.0
    }
];

async function runCrisisSimulation() {
    console.log("=================================================");
    console.log("   RESONANSI7 - CRISIS SIMULATION MODE           ");
    console.log("=================================================\n");

    for (const news of simulatedScenarios) {
        console.log(`[SIMULATION] Injecting Signal: "${news.title}"`);
        
        const amplification = nexus.detectLink(news);
        const finalScore = news.impactScore + amplification;
        const isSystemicRisk = finalScore > 7.0;

        if (isSystemicRisk) {
            const analysis = bsm.analyzeRegulatoryGap({
                domain: news.title,
                impact: finalScore
            });

            const sop = interventionLogic.getProcedures({
                domain: news.title
            });

            const brief = narrativeEngine.generateBrief({
                domain: news.source,
                impact: finalScore,
                recommendation: analysis.recommendation
            });

            console.log(brief);
            console.log("STRATEGIC PROCEDURES (SOP) TRIGGERED:");
            sop.forEach((step, i) => console.log(`${i+1}. ${step}`));
            console.log("\n-------------------------------------------------");
        } else {
            console.log(`[IGNORE] Score: ${finalScore.toFixed(1)} - Monitoring...`);
        }
    }
}

runCrisisSimulation();