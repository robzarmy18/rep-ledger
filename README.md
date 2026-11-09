# Rep Ledger

Workout log built around Planet Fitness equipment: pick a program day or muscle group, log sets/reps/weight, and track progress with charts. Includes an Upper/Lower hypertrophy program with a double-progression coach, ramp-up mode, weekly set counts and a bodyweight tracker.

**Install on iPhone:** open the GitHub Pages link in Safari → Share → Add to Home Screen. Works offline; data is stored on the phone (use Settings → Save backup file now and then).

- `index.html`, `sw.js`, `manifest.webmanifest`, `icon-*.png` — the installable app served by GitHub Pages
- `source/` — source page and the script that builds the installable version (`cd source && python3 build-pwa.py`, outputs to `pwa/`)
