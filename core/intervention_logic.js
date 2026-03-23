/**
 * Resonansi7 - Intervention Logic (NIK)
 * Purpose: Defining automated SOPs for high-impact systemic risks.
 * Architect: Adiguna Sopyan, MPP
 */

class InterventionLogic {
    constructor() {
        this.protocols = {
            DIGITAL_SOVEREIGNTY: [
                "Lakukan isolasi segera pada node infrastruktur yang terdeteksi anomali.",
                "Aktifkan jalur audit forensik pada log akses data nasional.",
                "Siapkan draf nota keberatan teknis untuk penyedia layanan (provider)."
            ],
            LOGISTICS: [
                "Evaluasi jalur distribusi alternatif untuk menghindari bottleneck.",
                "Koordinasi dengan otoritas pelabuhan/tol untuk pemantauan beban real-time.",
                "Analisis dampak kenaikan biaya logistik terhadap inflasi komoditas inti."
            ],
            ECONOMY: [
                "Lakukan stress-test pada variabel makro yang terdampak.",
                "Siapkan simulasi intervensi pasar atau penyesuaian tarif sementara.",
                "Proyeksi sentimen pasar berdasarkan anomali yang terdeteksi."
            ],
            DEFAULT: [
                "Tingkatkan frekuensi pemantauan sinyal (OSINT Scanning).",
                "Verifikasi silang temuan dengan sumber data sekunder.",
                "Siapkan laporan eskalasi untuk level pimpinan (Executive Brief)."
            ]
        };
    }

    /**
     * Mengambil prosedur berdasarkan kategori atau skor dampak.
     */
    getProcedures(analysis) {
        const domain = analysis.domain.toUpperCase();
        let selectedProtocol = this.protocols.DEFAULT;

        // Penentuan protokol berdasarkan kata kunci domain
        if (domain.includes('DATA') || domain.includes('KOMINFO') || domain.includes('HACKER')) {
            selectedProtocol = this.protocols.DIGITAL_SOVEREIGNTY;
        } else if (domain.includes('TOL') || domain.includes('LOGISTIK') || domain.includes('MARITIM')) {
            selectedProtocol = this.protocols.LOGISTICS;
        } else if (domain.includes('EKONOMI') || domain.includes('PAJAK') || domain.includes('ANTARA')) {
            selectedProtocol = this.protocols.ECONOMY;
        }

        return selectedProtocol;
    }
}

module.exports = new InterventionLogic();