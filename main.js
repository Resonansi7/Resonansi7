/**
 * Resonansi7 - Proactive Orchestration Core (POC)
 * v1.3.1 - Integrated Integrity Protection, Satori Engine & Social Awareness.
 * Architect: Adiguna Sopyan, MPP
 */

const newsOSINT = require('./adapters/news_osint');
const bsm = require('./core/blindspot_mapper');
const waHarmonizer = require('./adapters/wa_bridge');
const nexus = require('./core/causal_nexus');
const narrativeEngine = require('./core/narrative_engine');
const interventionLogic = require('./core/intervention_logic');
const satori = require('./core/satori_engine');
const socialOSINT = require('./adapters/social_osint');
const integrity = require('./core/integrity_protector'); // [NEW] Integrity Shield

async function initiateSovereignCycle() {
    console.log("=================================================");
    console.log("   RESONANSI7 v1.3.1 - SOVEREIGN AI OPERATOR     ");
    console.log("=================================================\n");

    // [PHASE 0: INTEGRITY CHECK]
    // Memastikan logika inti tidak dimodifikasi tanpa izin sebelum eksekusi.
    if (!integrity.verifyIntegrity()) {
        console.log("=================================================");
        console.log("  SYSTEM HALTED: CORE LOGIC TAMPERED DETECTED!   ");
        console.log("  Please verify your local checksums.            ");
        console.log("=================================================");
        return; 
    }

    console.log("[INTEGRITY] Logic verified. Proceeding to orchestration...\n");

    // 1. SCAN PHASE
    // Mengambil sinyal dari RSS resmi dan sentimen media sosial.
    const newsSignals = await newsOSINT.scanGlobalNews();
    const socialSignals = await socialOSINT.scanSocialSentiment();
    const sentimentMultiplier = socialSignals.reduce((acc, s) => acc + s.urgency, 0);

    console.log(`[ORCHESTRATOR] Found ${newsSignals.length} potential regulatory signals.`);

    // 2. ANALYSIS & EXECUTION PHASE
    for (const news of newsSignals) {
        // Deteksi keterkaitan kausal dengan memori masa lalu
        const amplification = nexus.detectLink(news);
        const finalScore = news.impactScore + amplification + sentimentMultiplier;
        const isSystemicRisk = finalScore > 7.0;

        // Prediksi probabilitas eskalasi masa depan via Satori
        const prediction = satori.predictEscalation(nexus.memory);

        if (isSystemicRisk) {
            console.log(`\n[ALERT] High-risk signal detected: "${news.title}"`);
            
            const analysis = bsm.analyzeRegulatoryGap({
                domain: news.source,
                impact: finalScore
            });

            const sop = interventionLogic.getProcedures({
                domain: news.source + " " + news.title
            });

            const brief = narrativeEngine.generateBrief({
                domain: news.source,
                impact: finalScore,
                recommendation: analysis.recommendation
            });

            console.log(brief);
            
            if (prediction) {
                console.log(`[SATORI FORECAST] Probability: ${(prediction.probability * 100).toFixed(0)}%`);
                console.log(`[SATORI] Severity: ${prediction.severity} | Window: ${prediction.timeframe}`);
            }

            console.log("\nSTRATEGIC PROCEDURES (SOP):");
            sop.forEach((step, i) => console.log(`${i+1}. ${step}`));

            const finalAlert = `[Resonansi7 ALERT]\nSignal: ${news.title}\nScore: ${finalScore.toFixed(1)}\nPrediction: ${(prediction ? prediction.probability * 100 : 0).toFixed(0)}% Escalation.`;
            
            // Pengiriman peringatan ke jalur komunikasi strategis
            await waHarmonizer.sendStrategicAlert("628123456789", finalAlert);
        } else {
            console.log(`[IGNORE] Signal: "${news.title}" (Score: ${finalScore.toFixed(1)})`);
        }
    }

    console.log("\n[STATUS] Cycle Complete. Monitoring standing by...");
}

// Inisialisasi siklus orkestrasi
initiateSovereignCycle().catch(console.error);