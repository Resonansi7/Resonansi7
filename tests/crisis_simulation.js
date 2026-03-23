/**
 * Resonansi7 - Crisis Simulation Suite (Oracle Enabled)
 * v1.6.0 - Validating Nexus, SOP, and Satori Predictions.
 * Architect: Adiguna Sopyan, MPP
 */

const bsm = require('../core/blindspot_mapper');
const nexus = require('../core/causal_nexus');
const narrativeEngine = require('../core/narrative_engine');
const interventionLogic = require('../core/intervention_logic');
const satori = require('../core/satori_engine'); // [NEW]

const simulatedScenarios = [
    {
        title: "Laporan gangguan teknis pada gateway server kementerian",
        source: "Internal_Monitor",
        impactScore: 5.5
    },
    {
        title: "Deteksi akses ilegal (peretasan) pada database kependudukan nasional",
        source: "Cyber_Security_Node",
        impactScore: 7.5
    }
];

async function runOracleSimulation() {
    console.log("=================================================");
    console.log("   RESONANSI7 - ORACLE STRESS TEST (V1.6)        ");
    console.log("=================================================\n");

    for (const news of simulatedScenarios) {
        console.log(`\n[SIGNAL] "${news.title}"`);
        
        const amplification = nexus.detectLink(news);
        const finalScore = news.impactScore + amplification;
        const isSystemicRisk = finalScore > 7.0;

        // [SATORI] Hitung prediksi eskalasi
        const prediction = satori.predictEscalation(nexus.memory);

        if (isSystemicRisk) {
            const analysis = bsm.analyzeRegulatoryGap({ domain: news.title, impact: finalScore });
            const sop = interventionLogic.getProcedures({ domain: news.title });
            const brief = narrativeEngine.generateBrief({
                domain: news.source,
                impact: finalScore,
                recommendation: analysis.recommendation
            });

            console.log(brief);

            if (prediction) {
                console.log(`>>> [SATORI PREDICTION] <<<`);
                console.log(`Probability: ${(prediction.probability * 100).toFixed(0)}%`);
                console.log(`Forecast: ${prediction.message}`);
                console.log(`Severity: ${prediction.severity} | Window: ${prediction.timeframe}`);
            }

            console.log("\nSTRATEGIC PROCEDURES (SOP) TRIGGERED:");
            sop.forEach((step, i) => console.log(`${i+1}. ${step}`));
            console.log("\n-------------------------------------------------");
        } else {
            console.log(`[IGNORE] Score: ${finalScore.toFixed(1)} - Monitoring.`);
        }
    }
}

runOracleSimulation().catch(console.error);