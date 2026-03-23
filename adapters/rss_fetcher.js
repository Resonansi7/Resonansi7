/**
 * Resonansi7 - Real-Time RSS Intelligence Fetcher
 * Purpose: Fetching live news feeds from national strategic sources.
 * Architect: Adiguna Sopyan, MPP
 */

const Parser = require('rss-parser');
const parser = new Parser();

class RSSFetcher {
    constructor() {
        // Target: Antara News (Ekonomi) & Portal Berita Strategis lainnya
        this.sources = [
            'https://www.antaranews.com/rss/ekonomi.xml',
            'https://www.kominfo.go.id/berita/feed'
        ];
    }

    async fetchStrategicNews() {
        console.log(`[RSS_FETCHER] Connecting to strategic nodes...`);
        let allArticles = [];

        for (const url of this.sources) {
            try {
                const feed = await parser.parseURL(url);
                console.log(`[RSS_FETCHER] Successfully fetched from: ${feed.title}`);
                
                feed.items.forEach(item => {
                    allArticles.push({
                        title: item.title,
                        link: item.link,
                        pubDate: item.pubDate,
                        contentSnippet: item.contentSnippet,
                        source: feed.title
                    });
                });
            } catch (error) {
                console.error(`[ERROR] Failed to fetch from ${url}:`, error.message);
            }
        }

        return allArticles;
    }
}

const rssFetcher = new RSSFetcher();
module.exports = rssFetcher;