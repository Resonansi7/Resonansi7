/**
 * Resonansi7 - Causal Nexus Stress Test
 * Membuktikan bahwa dua berita terkait akan memicu lonjakan skor.
 */

const nexus = require('../core/causal_nexus');
const riskScorer = require('../core/risk_scorer');

function runTest() {
    console.log("--- STARTING CAUSAL NEXUS TEST ---\n");

    // Berita 1: Gangguan Server (Cluster: DIGITAL_SOVEREIGNTY)
    const news1 = { title: "Gangguan server pusat di kementerian digital", impactScore: 5.0 };
    const amp1 = nexus.detectLink(news1);
    console.log(`[EVENT 1] ${news1.title} | Final Score: ${news1.impactScore + amp1}`);

    console.log("\n... waiting for next signal ...\n");

    // Berita 2: Kebocoran Data (Cluster yang SAMA)
    const news2 = { title: "Indikasi kebocoran data sensitif nasional", impactScore: riskScorer.calculate("Indikasi kebocoran data sensitif nasional") };
    const amp2 = nexus.detectLink(news2); // Harusnya terdeteksi cluster yang sama
    const finalScore2 = news2.impactScore + amp2;

    console.log(`[EVENT 2] ${news2.title}`);
    console.log(`[NEXUS] Amplification: +${amp2.toFixed(1)}`);
    console.log(`[RESULT] Final Systemic Score: ${finalScore2.toFixed(1)}`);

    if (finalScore2 > 9) {
        console.log("\n[SUCCESS] Causal Nexus successfully amplified systemic risk.");
    }
}

runTest();