const rssFetcher = require('./rss_fetcher');
const riskScorer = require('../core/risk_scorer'); // Titik dua (..) artinya keluar dari folder adapters

class NewsOSINT {
    constructor() {
        this.monitoredKeywords = ['data', 'regulasi', 'tarif', 'ekonomi', 'kebijakan', 'pelabuhan'];
    }

    async scanGlobalNews() {
        console.log(`[NEWS_OSINT] Scanning live feeds for keywords: ${this.monitoredKeywords.join(', ')}...`);
        
        const rawNews = await rssFetcher.fetchStrategicNews();
        
        // Filter berita berdasarkan kata kunci relevan
        const filteredNews = rawNews.filter(article => 
            this.monitoredKeywords.some(keyword => 
                article.title.toLowerCase().includes(keyword.toLowerCase())
            )
        ).map(article => {
            // [UPDATE 2] Hitung skor berdasarkan judul berita asli
            const score = riskScorer.calculate(article.title);
            
            return {
                title: article.title,
                source: article.source,
                impactScore: score, // Tidak lagi random
                relevance: score > 7 ? "HIGH" : "MEDIUM" // Dinamis berdasarkan bobot risiko
            };
        });

        return filteredNews.slice(0, 5); // Ambil 5 teratas
    }
}

const newsOSINT = new NewsOSINT();
module.exports = newsOSINT;