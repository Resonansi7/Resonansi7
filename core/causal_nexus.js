/**
 * Resonansi7 - Causal Nexus Core
 * Purpose: Connecting isolated events with persistent memory.
 * Architect: Adiguna Sopyan, MPP
 */

const brc = require('./blackout_resilience');

class CausalNexus {
    constructor() {
        // Memuat memori dari disk (BRC) atau array kosong jika baru
        const savedMemory = brc.load();
        this.memory = Array.isArray(savedMemory) ? savedMemory : [];
        this.maxMemory = 20;
        this.clusters = {
            LOGISTICS: ['tol', 'pelabuhan', 'tarif', 'logistik', 'bbm'],
            DIGITAL_SOVEREIGNTY: ['data', 'bocor', 'hacker', 'kominfo', 'server', 'peretasan'],
            ECONOMY: ['pajak', 'subsidi', 'inflasi', 'investasi']
        };
    }

    detectLink(newArticle) {
        this.memory.push(newArticle);
        if (this.memory.length > this.maxMemory) this.memory.shift();

        // Simpan ke disk setiap ada pembaruan memori
        brc.save(this.memory);

        let amplification = 0;
        const currentTitle = newArticle.title.toLowerCase();

        for (const [clusterName, keywords] of Object.entries(this.clusters)) {
            const matchesCurrent = keywords.some(k => currentTitle.includes(k));
            
            if (matchesCurrent) {
                const relatedEvents = this.memory.filter(old => 
                    old.title !== newArticle.title && 
                    keywords.some(k => old.title.toLowerCase().includes(k))
                );

                if (relatedEvents.length > 0) {
                    console.log(`[CAUSAL_NEXUS] Cluster ${clusterName} activated! Found ${relatedEvents.length} related events.`);
                    amplification = relatedEvents.length * 2.5;
                }
            }
        }

        return amplification;
    }
}

const causalNexus = new CausalNexus();
module.exports = causalNexus;