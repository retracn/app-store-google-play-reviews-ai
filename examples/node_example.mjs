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
