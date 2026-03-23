/**
 * Resonansi7 - Strategic Risk Scorer
 * Purpose: Calculating impact weight based on policy keywords.
 * Architect: Adiguna Sopyan, MPP
 */

class RiskScorer {
    constructor() {
        // Kata kunci yang memicu peringatan kedaulatan/keamanan
        this.dangerLeads = ['bocor', 'krisis', 'sanksi', 'pelanggaran', 'konflik', 'hacker', 'ancaman', 'peretasan'];
        // Kata kunci operasional rutin
        this.neutralLeads = ['diskon', 'tarif', 'pembangunan', 'perbaikan', 'kerjasama', 'tol', 'resmikan'];
    }

    calculate(title) {
        let score = 5.0; // Baseline skor tengah
        const text = title.toLowerCase();

        // Jika ada indikasi ancaman, skor naik drastis
        this.dangerLeads.forEach(word => {
            if (text.includes(word)) score += 4.0;
        });

        // Jika hanya berita operasional, skor turun
        this.neutralLeads.forEach(word => {
            if (text.includes(word)) score -= 1.5;
        });

        // Pastikan skor tetap di rentang 1-10
        return Math.min(Math.max(score, 1.0), 10.0);
    }
}

const riskScorer = new RiskScorer();
module.exports = riskScorer;