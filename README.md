[![Build Status](https://travis-ci.org/kpse/JsonHost.png?branch=master)](https://travis-ci.org/kpse/JsonHost)

## Features
- `facts.json` : This uri returns normal json with 14 records.
- `long_facts.json` : This uri returns long json with 126 records.
- `unstable_facts.json` : This uri sometimes responds a 500 error rather than json.
- `slow_facts.json` : This uri responds the request in 10 seconds.
- `slow_facts_with_content.json`: This uri is existing for Android part 2 tasks.

- `/user/jsmith`: for new mobile assignment profile request
- `/user/jsmith/tweets`: for new mobile assignment tweets request

## Contribution
- run `npm test` before push the code

