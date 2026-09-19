# BondStats Asia Market Calendar

A copyright-conscious, source-attributed event feed for high-signal Asian fixed-income and macro events.

## Markets
China, Hong Kong, Singapore, Japan, South Korea, India, Australia and New Zealand.

## Copyright / data policy
This repository stores normalized factual event metadata (dates, times, institution, category and BondStats-authored transmission labels). It does not copy third-party commercial calendars, article prose, charts, logos, screenshots or database compilations. Each confirmed event must link to the official institution supporting the date/time. Source-site terms remain applicable; a source link is attribution, not an endorsement or transfer of rights.

## Status
v1 establishes the schema, validation, automation and a small set of official-source confirmed events. Additional source adapters should be added only after their official publication format and reuse constraints have been checked.

## Output
`data/events.json`

## Local check
`npm run update && npm run validate`
