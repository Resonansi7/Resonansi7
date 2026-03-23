/**
 * Resonansi7 - Blackout Resilience Core (BRC)
 * Purpose: Ensuring persistent memory across system restarts.
 * Architect: Adiguna Sopyan, MPP
 */

const fs = require('fs');
const path = require('path');

class BlackoutResilience {
    constructor() {
        this.storagePath = path.join(__dirname, '../data/nexus_memory.json');
        this.ensureDirectory();
    }

    ensureDirectory() {
        const dir = path.dirname(this.storagePath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    }

    save(data) {
        try {
            fs.writeFileSync(this.storagePath, JSON.stringify(data, null, 2));
            // console.log("[BRC] Memory state synchronized to disk.");
        } catch (e) {
            console.error("[BRC] Sync Error:", e.message);
        }
    }

    load() {
        if (fs.existsSync(this.storagePath)) {
            const raw = fs.readFileSync(this.storagePath);
            return JSON.parse(raw);
        }
        return [];
    }
}

module.exports = new BlackoutResilience();