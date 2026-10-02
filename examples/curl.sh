#!/bin/bash
# export APIFY_TOKEN=your_token
curl -X POST "https://api.apify.com/v2/acts/automationnation~app-store-review-miner/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"appNames": ["Duolingo"]}'
