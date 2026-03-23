/**
 * Resonansi7 - Proactive Orchestration Core (POC)
 * The main entry point to unify all sovereign AI modules.
 * v1.1.5 - Integrated Narrative Engine & Causal Nexus linkage.
 * Architect: Adiguna Sopyan, MPP
 */

const newsOSINT = require('./adapters/news_osint');
const bsm = require('./core/blindspot_mapper');
const waHarmonizer = require('./adapters/wa_bridge');
const nexus = require('./core/causal_nexus');
const narrativeEngine = require('./core/narrative_engine'); // Modul Laporan Strategis

async function initiateSovereignCycle() {
    console.log("=================================================");
    console.log("   RESONANSI7 v1.1.5 - SOVEREIGN AI OPERATOR     ");
    console.log("=================================================\n");

    // 1. SCAN PHASE (Ambil Berita Real-Time via RSS)
    const newsSignals = await newsOSINT.scanGlobalNews();
    console.log(`[ORCHESTRATOR] Found ${newsSignals.length} potential regulatory signals.`);

    // 2. ANALYSIS & NEXUS PHASE
    for (const news of newsSignals) {
        // Deteksi keterkaitan dengan memori berita sebelumnya (BRC Persistence)
        const amplification = nexus.detectLink(news);
        const finalScore = news.impactScore + amplification;
        
        // Threshold: Skor > 7 dianggap kritis (Systemic Risk)
        const isSystemicRisk = finalScore > 7.0;

        if (isSystemicRisk) {
            console.log(`\n[ALERT] High-risk signal detected: "${news.title}"`);
            
            // Audit Celah Regulasi dengan Skor yang sudah diamplifikasi
            const analysis = bsm.analyzeRegulatoryGap({
                domain: news.source,
                impact: finalScore
            });

            // 3. NARRATIVE GENERATION (Laporan Otomatis untuk Pengambil Kebijakan)
            const brief = narrativeEngine.generateBrief({
                domain: news.source,
                impact: finalScore,
                recommendation: analysis.recommendation
            });

            // Tampilkan Laporan Formal di Terminal (Audit Trail)
            console.log(brief);

            // 4. ACTION PHASE (Intervensi WhatsApp)
            const nexusNote = amplification > 0 ? " (SYSTEMIC LINK DETECTED)" : "";
            const finalAlert = `[Resonansi7 ALERT]${nexusNote}\nSignal: ${news.title}\nSystemic Score: ${finalScore.toFixed(1)}\nCheck terminal for full Brief.`;

            await waHarmonizer.sendStrategicAlert("628123456789", finalAlert);
        } else {
            console.log(`[IGNORE] Signal: "${news.title}" (Score: ${finalScore.toFixed(1)}) - Below threshold.`);
        }
    }

    console.log("\n[STATUS] Cycle Complete. Monitoring standing by...");
}

initiateSovereignCycle().catch(console.error);