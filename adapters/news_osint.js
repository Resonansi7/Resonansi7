const rssFetcher = require('./rss_fetcher');

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
        ).map(article => ({
            title: article.title,
            source: article.source,
            impactScore: Math.floor(Math.random() * 4) + 6, // Simulasi scoring sementara
            relevance: "HIGH"
        }));

        return filteredNews.slice(0, 5); // Ambil 5 teratas
    }
}

const newsOSINT = new NewsOSINT();
module.exports = newsOSINT;