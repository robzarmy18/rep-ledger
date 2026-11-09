# Rep Ledger roadmap

## Parked: native iPhone app (App Store / TestFlight)

**Status:** on hold. Revisit once the web app is dialed in.

**Why:** a native app can read Apple Health directly, so weigh-ins from the
Ovutek FitPal scale (which syncs to Apple Health) would appear automatically,
with no Shortcut or paste step. It would also allow reliable rest-timer alerts
when the phone is locked, and live barcode scanning without browser limits.

**What it would take**
- A Mac with Xcode, and an Apple Developer account ($99/year) for TestFlight or App Store installs.
- Wrap the existing app (e.g. Capacitor) instead of rewriting it, so all current features carry over.
- Add a HealthKit plugin: read Weight and Body Fat Percentage; optionally write workouts and dietary carbs/calories back to Health.
- Native local notifications for the rest timer.
- A one-time data move: Settings → Save backup file in the web app, then Restore in the native app.

## Current workaround (live)
Apple Health → iPhone Shortcut ("Rep Ledger weights") → Food tab → Import from Apple Health → Paste & import.
