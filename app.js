(function () {
  const T = window.TRIP;
  const P = T.places;
  const eur = n => "€" + (Number.isInteger(n) ? n : n.toFixed(2));
  const gbp = n => "£" + Math.round(n / T.gbpToEur);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Which day first uses each place (for colouring)
  const placeDay = {};
  T.days.forEach((d, i) => d.stops.forEach(s => { if (s.place && placeDay[s.place] === undefined) placeDay[s.place] = i; }));
  const colourOf = id => (placeDay[id] !== undefined ? T.days[placeDay[id]].colour : "#888");

  // Itinerary
  const daysEl = document.getElementById("days");
  T.days.forEach((d, i) => {
    const stops = d.stops.map(s => {
      if (!s.place) {
        return `<li class="stop"><span class="time">${esc(s.time)}</span><div><div class="what">${esc(s.free)}</div></div></li>`;
      }
      const p = P[s.place];
      const price = p.price === 0 ? `<span class="pill free">Free</span>` : `<span class="pill">${eur(p.price)} pp</span>`;
      return `<li class="stop"><span class="time">${esc(s.time)}</span><div>
        <div class="what"><a href="#place-${s.place}">${esc(p.name)}</a></div>
        <div class="note">${esc(s.note)}</div>
        <div class="meta">${price}<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel)}</a></div>
      </div></li>`;
    }).join("");
    daysEl.insertAdjacentHTML("beforeend", `<article class="day" style="--day:${d.colour}">
      <div class="day-head"><div class="date">Day ${i + 1} · ${esc(d.date)}</div><h3>${esc(d.title)}</h3>
      <p>${esc(d.summary)}</p><p class="transport"><strong>Transport:</strong> ${esc(d.transport)}</p></div>
      <ul class="stops">${stops}</ul></article>`);
  });

  // Place cards
  const cardsEl = document.getElementById("place-cards");
  Object.keys(P).sort((a, b) => (placeDay[a] ?? 99) - (placeDay[b] ?? 99)).forEach(id => {
    const p = P[id];
    const maps = `https://www.google.com/maps/dir/?api=1&destination=${p.coords[0]},${p.coords[1]}&travelmode=transit`;
    const dayLabel = placeDay[id] !== undefined ? `Day ${placeDay[id] + 1} · ${T.days[placeDay[id]].date}` : "Optional";
    cardsEl.insertAdjacentHTML("beforeend", `<article class="place" id="place-${id}" style="--day:${colourOf(id)}">
      <h3>${esc(p.name)}</h3><div class="area">${esc(p.area)} · ${esc(dayLabel)}</div>
      <p class="desc">${esc(p.desc)}</p>
      <dl><dt>Price</dt><dd>${esc(p.priceNote)}</dd><dt>Hours</dt><dd>${esc(p.hours)}</dd></dl>
      ${p.tips && p.tips.length ? `<ul class="tips">${p.tips.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
      <div class="actions"><a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">${p.price ? "Tickets" : "Info"}: ${esc(p.linkLabel)}</a>
      <a class="btn secondary" href="${maps}" target="_blank" rel="noopener">Directions</a></div>
    </article>`);
  });

  // Budget
  const tbl = document.getElementById("budget-table");
  let core = 0, opt = 0;
  const rows = T.budget.map(b => {
    const total = b.pp * b.qty;
    if (b.core) core += total; else opt += total;
    return `<tr class="${b.core ? "" : "optional"}"><td>${esc(b.item)}${b.core ? "" : " <span class='pill'>optional</span>"}</td>
      <td class="num">${eur(b.pp)}</td><td class="num">${b.qty}</td><td class="num">${eur(total)}</td><td class="num">${gbp(total)}</td></tr>`;
  }).join("");
  tbl.innerHTML = `<thead><tr><th>Item</th><th class="num">Per person</th><th class="num">Qty</th><th class="num">EUR</th><th class="num">GBP</th></tr></thead>
    <tbody>${rows}
    <tr class="total"><td>Core plan total</td><td></td><td></td><td class="num">${eur(core)}</td><td class="num">${gbp(core)}</td></tr>
    <tr class="total"><td>With all optional extras</td><td></td><td></td><td class="num">${eur(core + opt)}</td><td class="num">${gbp(core + opt)}</td></tr></tbody>`;
  const budgetEur = T.budgetGbp * T.gbpToEur;
  document.getElementById("budget-summary").innerHTML =
    `Your ceiling of £${T.budgetGbp} is about ${eur(Math.round(budgetEur))}. The core plan uses ${gbp(core)}, leaving roughly ${gbp(budgetEur - core)} spare for a guided tour of the Vatican Museums or the Colosseum underground (typically €50–90 per person) if you want one, or for the Scavi tour if a slot comes through.`;

  // Sources
  document.getElementById("source-list").innerHTML = T.sources.map(([t, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("");

  // Map
  if (window.L) {
    const map = L.map("leaflet-map", { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
    const bounds = [];
    Object.keys(P).forEach(id => {
      const p = P[id];
      const m = L.circleMarker(p.coords, { radius: 9, color: "#fff", weight: 2, fillColor: colourOf(id), fillOpacity: 0.95 }).addTo(map);
      const dayLabel = placeDay[id] !== undefined ? `Day ${placeDay[id] + 1}, ${T.days[placeDay[id]].date}` : "Optional";
      m.bindPopup(`<strong>${esc(p.name)}</strong><br>${esc(dayLabel)}<br>${p.price ? eur(p.price) + " pp" : "Free"} · <a href="${esc(p.link)}" target="_blank" rel="noopener">tickets / info</a><br><a href="#place-${id}">Details below</a>`);
      bounds.push(p.coords);
    });
    T.days.forEach(d => {
      const line = d.stops.filter(s => s.place).map(s => P[s.place].coords);
      L.polyline(line, { color: d.colour, weight: 3, opacity: 0.6, dashArray: "6 6" }).addTo(map);
    });
    map.fitBounds(bounds, { padding: [24, 24] });
    document.getElementById("legend").innerHTML = T.days.map((d, i) => `<span style="--day:${d.colour}">Day ${i + 1} · ${esc(d.date)}</span>`).join("");
  }
})();
