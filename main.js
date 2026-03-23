/**
 * Resonansi7 - Proactive Orchestration Core (POC)
 * The main entry point to unify all sovereign AI modules.
 * Now featuring: Causal Nexus Linkage.
 * Architect: Adiguna Sopyan, MPP
 */

const newsOSINT = require('./adapters/news_osint');
const bsm = require('./core/blindspot_mapper');
const waHarmonizer = require('./adapters/wa_bridge');
const nexus = require('./core/causal_nexus'); // Modul Pengait Titik Masalah

async function initiateSovereignCycle() {
    console.log("=================================================");
    console.log("   RESONANSI7 v1.1.0 - SOVEREIGN AI OPERATOR     ");
    console.log("=================================================\n");

    // 1. SCAN PHASE (Ambil Berita Real-Time)
    const newsSignals = await newsOSINT.scanGlobalNews();
    console.log(`[ORCHESTRATOR] Found ${newsSignals.length} potential regulatory signals.`);

    // 2. ANALYSIS & NEXUS PHASE
    for (const news of newsSignals) {
        // Deteksi keterkaitan dengan memori berita sebelumnya
        const amplification = nexus.detectLink(news);
        const finalScore = news.impactScore + amplification;
        
        // Threshold: Skor > 7 dianggap kritis (Systemic Risk)
        const isSystemicRisk = finalScore > 7.0;

        if (isSystemicRisk) {
            console.log(`\n[ALERT] High-risk signal detected: "${news.title}"`);
            console.log(`[NEXUS] Amplification: +${amplification.toFixed(1)} | Final Score: ${finalScore.toFixed(1)}`);
            
            // Audit Celah Regulasi dengan Skor yang sudah diamplifikasi
            const analysis = bsm.analyzeRegulatoryGap({
                domain: news.source,
                impact: finalScore
            });

            // 3. ACTION PHASE (Intervensi WA)
            const nexusNote = amplification > 0 ? " (SYSTEMIC LINK DETECTED)" : "";
            const finalReport = `
[Resonansi7 ALERT]${nexusNote}
Signal: ${news.title}
Final Score: ${finalScore.toFixed(1)}
Source: ${news.source}
Rec: ${analysis.recommendation}
            `;

            await waHarmonizer.sendStrategicAlert("628123456789", finalReport);
        } else {
            console.log(`[IGNORE] Signal: "${news.title}" (Score: ${finalScore.toFixed(1)}) - Below threshold.`);
        }
    }

    console.log("\n[STATUS] Cycle Complete. Monitoring standing by...");
}

initiateSovereignCycle().catch(console.error);