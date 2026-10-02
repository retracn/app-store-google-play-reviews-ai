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
