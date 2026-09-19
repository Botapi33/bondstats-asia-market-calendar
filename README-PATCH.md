# BondStats Asia Market Calendar — Data Expansion v1.1

Content-only engine expansion. No Main Site files and no GitHub workflow files are included.

Changes:
- preserves existing Japan and Australia official events;
- adds official China NBS release-calendar events for Sep-Dec 2026;
- adds Singapore NODX/external-trade dates based on Enterprise Singapore's published standing release rule;
- raises generated event count from 5 to 21;
- retains official source URL and BondStats transmission classification for every event;
- no copied source prose, charts, logos, screenshots or commercial calendar content.

Validation performed:
- `node src/update.mjs` PASS
- `node src/validate.mjs` PASS
- 21 unique validated events

After upload, run the existing Update Asia Market Calendar action once. The Main Site UI should consume the updated JSON automatically.
