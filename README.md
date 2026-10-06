# App Store and Google Play reviews with an AI report of bugs and feature requests

[![Run on Apify](https://img.shields.io/badge/Run%20on-Apify-0b57d0)](https://apify.com/automationnation/app-store-review-miner)

App Store & Google Play Reviews Scraper + AI is an Apify Actor that scrapes the newest App Store and Google Play reviews for any app and turns them into an AI report of top bugs, feature requests and critical issues.

**Price:** $0.05 per app report ($0.04 on Gold) · **Run it:** [https://apify.com/automationnation/app-store-review-miner](https://apify.com/automationnation/app-store-review-miner) · **Guide:** [https://retracn.github.io/automationnation-actors/app-store-review-miner/](https://retracn.github.io/automationnation-actors/app-store-review-miner/)

## Quick facts

- One report per app per store: rating statistics, star distribution, ratings per app version, top bugs, feature requests, critical issues, competitor mentions and the raw reviews (up to 500 per app per store).
- Input app names, App Store or Google Play links, or IDs; several App Store countries at once.
- Price: $0.05 per app report ($0.04 on Gold); only successful AI reports are charged.
- Only-new-reviews mode for weekly monitoring.

## Example input

```json
{
  "appNames": [
    "Duolingo"
  ]
}
```

## Run it from code

**REST API**

```bash
curl -X POST "https://api.apify.com/v2/acts/automationnation~app-store-review-miner/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"appNames": ["Duolingo"]}'
```

**Python** — see [`examples/python_example.py`](examples/python_example.py)

```python
# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/app-store-review-miner").call(run_input={
  "appNames": [
    "Duolingo"
  ]
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("appName"), item.get("platform"), item.get("avgRating"), item.get("topBugsList"))
```

**JavaScript** — see [`examples/node_example.mjs`](examples/node_example.mjs)

```js
// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/app-store-review-miner').call({
  "appNames": [
    "Duolingo"
  ]
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.appName, item.platform, item.avgRating, item.topBugsList);
```

## Use it with AI agents (MCP)

Hosted MCP server URL (Claude, ChatGPT, Cursor and other clients with remote MCP support):

```
https://mcp.apify.com?tools=automationnation/app-store-review-miner
```

Local config for Claude Desktop / Cursor — [`mcp/claude_desktop_config.json`](mcp/claude_desktop_config.json):

```json
{
  "mcpServers": {
    "app-store-review-miner": {
      "command": "npx",
      "args": [
        "-y",
        "@apify/actors-mcp-server",
        "--tools",
        "automationnation/app-store-review-miner"
      ],
      "env": {
        "APIFY_TOKEN": "YOUR_APIFY_TOKEN"
      }
    }
  }
}
```

## FAQ

**How do I scrape App Store and Google Play reviews?**
Give App Store & Google Play Reviews Scraper + AI on Apify app names, store links or IDs. It collects the newest reviews from both stores (up to 500 per app per store) and returns them with an AI summary of bugs, feature requests and critical issues.

**How can I analyse app reviews with AI?**
App Store & Google Play Reviews Scraper + AI runs one AI analysis per app over the newest reviews and returns structured lists of bugs, feature requests and critical issues, plus ratings per app version to spot bad releases.

## More from AutomationNation

- [AI Visibility Tracker](https://apify.com/automationnation/ai-visibility-tracker) — $0.05 per answer checked ($0.04 on Gold) + $0.50 per optional report · [GitHub examples](https://github.com/retracn/ai-visibility-tracker)
- [Google Jobs Scraper](https://apify.com/automationnation/google-jobs-scraper) — $2 per 1,000 jobs ($1.50 on paid plans) + $0.03 per search · [GitHub examples](https://github.com/retracn/google-jobs-scraper)
- [YouTube Transcript Scraper](https://apify.com/automationnation/youtube-transcript-scraper) — $1.50 per 1,000 transcripts ($1.20 on Gold and above) · [GitHub examples](https://github.com/retracn/youtube-transcript-api)
- [Google Shopping Scraper](https://apify.com/automationnation/google-shopping-scraper) — $1 per 1,000 products ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-shopping-scraper)
- [Google Flights Scraper](https://apify.com/automationnation/google-flights-scraper) — $0.20 per 1,000 flights ($0.16 on Gold and above) · [GitHub examples](https://github.com/retracn/google-flights-scraper)
- [Google Hotels Scraper](https://apify.com/automationnation/google-hotels-scraper) — $1 per 1,000 hotels ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-hotels-scraper)
- [Google Ads Transparency Scraper](https://apify.com/automationnation/google-ads-transparency-scraper) — $1 per 1,000 ads ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-ads-transparency-scraper)
- [Google News Scraper](https://apify.com/automationnation/google-news-scraper) — $1 per 1,000 articles ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-news-scraper)
- [Google Images Scraper](https://apify.com/automationnation/google-images-scraper) — $0.25 per 1,000 images ($0.20 on Gold and above) · [GitHub examples](https://github.com/retracn/google-images-scraper)
- [Google Custom Search API Alternative](https://apify.com/automationnation/google-custom-search-api) — $5 per 1,000 searches of up to 10 results ($4 on Gold and above) · [GitHub examples](https://github.com/retracn/google-custom-search-api-alternative)
- [Google Videos Scraper](https://apify.com/automationnation/google-videos-scraper) — $1 per 1,000 videos ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-videos-scraper)
- [Google Trends Scraper](https://apify.com/automationnation/google-trends-scraper) — $1 per 1,000 keyword reports ($0.27–$0.90 on paid plans) · $0.50 per 1,000 trending searches · [GitHub examples](https://github.com/retracn/google-trends-scraper)
- [App Store Reviews Scraper](https://apify.com/automationnation/app-store-reviews-scraper) — $0.08 per 1,000 reviews ($0.05–$0.07 on paid plans) · [GitHub examples](https://github.com/retracn/app-store-reviews-scraper)
- [Google Play Reviews Scraper](https://apify.com/automationnation/google-play-reviews-scraper) — $0.08 per 1,000 reviews ($0.05–$0.07 on paid plans) · [GitHub examples](https://github.com/retracn/google-play-reviews-scraper)
- [AEO & GEO Tracker — Google AI Overview Citation Checker](https://apify.com/automationnation/aeo-auditor) — $0.04 per keyword ($0.032 on Gold), plus $2 per run from 17 Nov 2026; $0.01 per keyword until 16 Oct 2026 · [GitHub examples](https://github.com/retracn/google-ai-overview-tracker)
- [Google Maps Leads Scraper](https://apify.com/automationnation/google-maps-leads) — $0.03 per lead ($0.024 on Gold) · [GitHub examples](https://github.com/retracn/google-maps-leads-scraper)
- [Google Maps Leads Scraper UK](https://apify.com/automationnation/uk-business-leads) — $0.05 per lead ($0.04 on Gold) · [GitHub examples](https://github.com/retracn/uk-business-leads-google-maps)
- [UK Companies House Leads — Filing Signals & AI Outreach](https://apify.com/automationnation/companies-house-leads) — $0.008 per lead
- [Contact Waterfall Enrichment — Emails & Directors](https://apify.com/automationnation/contact-waterfall-enrichment) — $0.015 per company
- [All Actors and guides](https://retracn.github.io/automationnation-actors/) · [AI visibility trackers compared](https://retracn.github.io/automationnation-actors/compare/ai-visibility-trackers/) · [Google Jobs scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-jobs-scrapers/) · [Google Trends scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-trends-scrapers/) · [App Store review scrapers compared](https://retracn.github.io/automationnation-actors/compare/app-store-review-scrapers/) · [Google Play review scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-play-review-scrapers/) · [YouTube transcript scrapers compared](https://retracn.github.io/automationnation-actors/compare/youtube-transcript-scrapers/) · [Google Flights scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-flights-scrapers/) · [Google Hotels scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-hotels-scrapers/) · [Google Ads Transparency scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-ads-transparency-scrapers/) · [Google Shopping scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-shopping-scrapers/) · [Google News scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-news-scrapers/)

---

This repository holds usage examples. The scraper itself runs on the [Apify platform](https://apify.com/automationnation/app-store-review-miner); you need a free Apify account and API token. Examples are MIT licensed.
