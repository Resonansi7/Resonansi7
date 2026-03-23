/**
 * Resonansi7 - Causal Nexus Core
 * Purpose: Connecting isolated events to detect systemic risks.
 * Architect: Adiguna Sopyan, MPP
 */

class CausalNexus {
    constructor() {
        this.memory = []; // Menyimpan histori berita terbaru
        this.maxMemory = 10;
        this.clusters = {
            LOGISTICS: ['tol', 'pelabuhan', 'tarif', 'logistik', 'bbm'],
            DIGITAL_SOVEREIGNTY: ['data', 'bocor', 'hacker', 'kominfo', 'server'],
            ECONOMY: ['pajak', 'subsidi', 'inflasi', 'investasi']
        };
    }

    /**
     * Menghubungkan berita baru dengan memori yang ada.
     */
    detectLink(newArticle) {
        this.memory.push(newArticle);
        if (this.memory.length > this.maxMemory) this.memory.shift();

        let amplification = 0;
        const currentTitle = newArticle.title.toLowerCase();

        // Cari hubungan dalam cluster yang sama
        for (const [clusterName, keywords] of Object.entries(this.clusters)) {
            const matchesCurrent = keywords.some(k => currentTitle.includes(k));
            
            if (matchesCurrent) {
                // Hitung berapa banyak berita di cluster yang sama dalam memori
                const relatedEvents = this.memory.filter(old => 
                    old.title !== newArticle.title && 
                    keywords.some(k => old.title.toLowerCase().includes(k))
                );

                if (relatedEvents.length > 0) {
                    console.log(`[CAUSAL_NEXUS] Cluster ${clusterName} activated! Found ${relatedEvents.length} related events.`);
                    amplification = relatedEvents.length * 2.5; // Amplifikasi risiko
                }
            }
        }

        return amplification;
    }
}

const causalNexus = new CausalNexus();
module.exports = causalNexus;