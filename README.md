# GOCODE-TechnicalChallenge
GOCODE Technical Challenge

# Setup

npm install
npx playwright install
docker pull pocketaces2/fashionhub-demo-app

# Run tests

## Local
npm test-e2e-local

## Staging
npm test-e2e-staging

Staging environment URL provided in the task is not reachable from public DNS.
Error: DNS_PROBE_POSSIBLE.

Assumption: staging requires internal network access (VPN / private DNS) or is a placeholder.

## Production
npm test-e2e-prod

## All environments together
npm test-e2e
