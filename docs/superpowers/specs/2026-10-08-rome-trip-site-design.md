# Rome Trip Planner Site — Design

Date: 2026-10-08

## Purpose
A single-page, static, Vercel-hosted guide for a first-time Rome visit,
Wed 14 – Sun 18 Oct 2026, for a Roman Catholic couple who are active,
like history, and prefer walking and public transport.

## What the user said
- Dates 14–18 Oct 2026, two adults, first time in Rome.
- RC: Vatican is the headline. Include ticket prices and links to ticket portals.
- Budget: max £500 for sightseeing unless more is truly necessary. Food and lodging already paid.
- Hotel address given: Via Aurelia 25, Stagno, 57017 Livorno.
- Output: a Vercel-deployed page with locations and descriptions.

## Assumptions (flagged to the user)
- The hotel address is ~300 km from Rome. The plan assumes the couple sleeps in
  Rome; a logistics section covers Livorno↔Rome trains and a 2-day-trip fallback.
- Arrival is early enough on Wed 14 Oct to reach St Peter's Square by ~08:00 for
  the 10:00 General Audience; otherwise Day 1 degrades gracefully.
- £1 ≈ €1.15 (conservative; mid-2026 rate was ~1.17).

## Architecture
Static site, no build step:
- `index.html` — shell, sections: hero, flags, itinerary (5 days), map, places, budget, logistics, tips, sources.
- `data.js` — places (coords, description, price, official link, hours) and itinerary (per day, time blocks referencing place ids).
- `app.js` — renders itinerary/place cards/budget table from data; Leaflet map with per-day colours.
- `styles.css` — responsive, light/dark via prefers-color-scheme.
- `vercel.json` — static config (cleanUrls).
- Leaflet 1.9.4 from unpkg, OpenStreetMap tiles. No API keys.

## Testing
- `node --check` on JS files; headless browser load with console-error check and screenshot.
- Manual check: every place has a price, link, coords; budget sums match.

## Deployment
`npx vercel --prod` after the user runs `npx vercel login` (no credentials on this machine).
