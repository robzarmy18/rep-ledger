# Rep Ledger

Workout log built around Planet Fitness equipment: pick a program day or muscle group, log sets/reps/weight, and track progress with charts. Includes an Upper/Lower hypertrophy program with a double-progression coach, ramp-up mode, weekly set counts and a bodyweight tracker.

**Install on iPhone:** open the GitHub Pages link in Safari → Share → Add to Home Screen. Works offline; data is stored on the phone (use Settings → Save backup file now and then).

- `index.html`, `sw.js`, `manifest.webmanifest`, `icon-*.png` — the installable app served by GitHub Pages
- `vendor/tesseract/` — on-device text reader for nutrition-label photos (tesseract.js 5.1.1 + core + English data, Apache-2.0)
- `vendor/html5-qrcode.min.js` — barcode scanning library (html5-qrcode 2.3.8, Apache-2.0, see `vendor/html5-qrcode-LICENSE.txt`)
- `source/` — source page and the script that builds the installable version (`cd source && python3 build-pwa.py`, outputs to `pwa/`)
