// All prices in EUR per adult, checked 8 Oct 2026. Always re-check on the official link before paying.
window.TRIP = {
  title: "Rome, 14–18 October 2026",
  gbpToEur: 1.15,
  budgetGbp: 500,

  places: {
    stpeters_square: {
      name: "St Peter's Square & Papal General Audience",
      area: "Vatican",
      coords: [41.9022, 12.4573],
      price: 0, priceNote: "Free. Tickets are free but must be requested in advance.",
      hours: "Audience Wed 10:00. Square opens ~07:30 on audience days; arrive by 08:00 for a good seat.",
      link: "https://eventi.pontificalisdomus.va/?lang=en-us",
      linkLabel: "Request free tickets (Prefecture of the Papal Household)",
      desc: "Bernini's colonnade (1656–67) embraces the square like two arms. On Wednesdays the Pope holds the General Audience here: a drive through the crowd in the popemobile, a catechesis in several languages, greetings to pilgrim groups, and the Apostolic Blessing, which also covers religious objects you bring. Pope Leo XIV held the 7 October audience as normal and no October journey is scheduled, so 14 October should go ahead.",
      tips: ["Register on the Prefecture portal and request 2 tickets for Wed 14 Oct now. Collect at the Bronze Door (right colonnade) Tue 15:00–19:00 or Wed from 07:00, or follow the instructions in your confirmation email.", "Bring rosaries or medals to be blessed.", "Security screening is airport-style. No large bags."]
    },
    stpeters_basilica: {
      name: "St Peter's Basilica & Dome climb",
      area: "Vatican",
      coords: [41.9022, 12.4539],
      price: 17, priceNote: "Basilica is free. Dome with stairs €17 or with lift €22; both include priority basilica entry and a digital audio guide.",
      hours: "Basilica 07:00–20:00. Dome 07:00–18:00 until 25 Oct.",
      link: "https://booking.basilicasanpietro.va/en/idea/52251275/-dome-with-stairs-includes-basilica-",
      linkLabel: "Book the Dome (official basilica site)",
      desc: "The largest church in Christendom, built 1506–1626 over the tomb of the Apostle Peter. Inside: Michelangelo's Pietà, Bernini's bronze baldachin over the papal altar, the bronze statue of St Peter with its worn foot, and the Chair of Peter. Michelangelo designed the dome; 551 steps (320 if you take the lift to the roof) bring you inside the drum and then to the lantern with the best view in Rome. The Vatican Grottoes beneath hold the tombs of many popes, including St John Paul II's original resting place and Benedict XVI.",
      tips: ["Book a 14:00–15:00 dome slot: you then enter the basilica without the general security queue.", "Dress code enforced: shoulders and knees covered.", "The Scavi (necropolis) tour under the basilica reaches St Peter's tomb itself but needs a request weeks to months ahead; try via the official link in Logistics."]
    },
    vatican_museums: {
      name: "Vatican Museums & Sistine Chapel",
      area: "Vatican",
      coords: [41.9065, 12.4536],
      price: 25, priceNote: "€20 + €5 online booking fee. Reduced rates for under-18s.",
      hours: "Mon–Sat 08:00–20:00, last entry 18:00. Closed Sundays (except last Sunday of month, free).",
      link: "https://tickets.museivaticani.va/home",
      linkLabel: "Official tickets (tickets.museivaticani.va)",
      desc: "Five centuries of papal collecting over 7 km of galleries: the Laocoön and the Belvedere Torso, the Gallery of Maps, Raphael's Stanze (the School of Athens), and finally the Sistine Chapel, where Michelangelo painted the ceiling (1508–12) and the Last Judgement (1536–41) and where the conclave that elected Leo XIV met in May 2025. Allow 3–4 hours.",
      tips: ["Tickets open 60 days ahead and the early slots sell out: book the earliest slot available right now.", "Walk the museum in order: Pinacoteca first if you like painting, then the long route to the Sistine Chapel.", "Silence and no photos in the Sistine Chapel.", "Beware of resellers; the official price is €25."]
    },
    castel_santangelo: {
      name: "Castel Sant'Angelo & Ponte Sant'Angelo",
      area: "Vatican / Centre",
      coords: [41.9031, 12.4663],
      price: 18, priceNote: "€18 to go inside (optional). Free to walk the bridge and ramparts outside.",
      hours: "09:00–19:30, last entry 18:30. Closed Mondays.",
      link: "https://www.coopculture.it/en/products/castel-santangelo-ticket-individual-up-to-9-people-00001/",
      linkLabel: "Official tickets (CoopCulture)",
      desc: "Hadrian's mausoleum (AD 139) became the popes' fortress, prison and treasury, linked to the Vatican by the Passetto, an elevated escape corridor used by Clement VII during the 1527 Sack of Rome. The bridge carries ten angels designed by Bernini holding the instruments of the Passion. The terrace is where Tosca jumps.",
      tips: ["Optional: do the interior only if you have energy left; the bridge at sunset is the free highlight."]
    },
    piazza_navona: {
      name: "Piazza Navona",
      area: "Centre",
      coords: [41.8992, 12.4731],
      price: 0, priceNote: "Free",
      hours: "Always open",
      link: "https://www.turismoroma.it/en/places/piazza-navona",
      linkLabel: "Rome tourism info",
      desc: "Keeps the oval shape of Domitian's stadium (AD 86). Bernini's Fountain of the Four Rivers (1651) faces Borromini's church of Sant'Agnese in Agone, built where the 13-year-old St Agnes was martyred.",
      tips: ["San Luigi dei Francesi, two minutes away, has three Caravaggio paintings of St Matthew (free)."]
    },
    pantheon: {
      name: "Pantheon (Basilica of St Mary and the Martyrs)",
      area: "Centre",
      coords: [41.8986, 12.4769],
      price: 7, priceNote: "€7 (raised from €5 on 1 Jul 2026). Nominal ticket, bring ID.",
      hours: "Daily 09:00–19:00, last entry 18:30. No tourist entry during Mass (Sat 17:00, Sun 10:30).",
      link: "https://portale.museiitaliani.it/",
      linkLabel: "Official tickets (Musei Italiani portal)",
      desc: "Hadrian's temple of AD 125, consecrated as a church in 609, which is why it survives intact. The unreinforced concrete dome, 43.3 m wide with its open oculus, was the world's largest for 1,300 years. Raphael and two kings of Italy are buried here.",
      tips: ["Book a 17:30 slot on Day 1 and watch the light move across the floor.", "If it rains, the rain falls through the oculus and drains through the floor holes."]
    },
    trevi: {
      name: "Trevi Fountain & Spanish Steps",
      area: "Centre",
      coords: [41.9009, 12.4833],
      price: 0, priceNote: "Free (a controlled-access queue may run at busy hours).",
      hours: "Always open",
      link: "https://www.turismoroma.it/en/places/trevi-fountain",
      linkLabel: "Rome tourism info",
      desc: "The end point of the Aqua Virgo aqueduct of 19 BC, dressed in Nicola Salvi's Baroque facade (1762). Throw a coin with your right hand over your left shoulder to return to Rome. From here a 10-minute walk leads to the Spanish Steps and the church of Trinità dei Monti.",
      tips: ["Best after 21:00 when the day crowds thin."]
    },
    popolo: {
      name: "Santa Maria del Popolo & Pincio terrace",
      area: "North centre",
      coords: [41.9115, 12.4765],
      price: 0, priceNote: "Free",
      hours: "Church roughly 07:30–12:30 and 16:00–19:00",
      link: "https://www.santamariadelpopolo.it/",
      linkLabel: "Church website",
      desc: "Augustinian church on the spot of Nero's reputed grave. The Cerasi Chapel has Caravaggio's Conversion of St Paul and Crucifixion of St Peter; the Chigi Chapel was designed by Raphael and finished by Bernini. Climb the ramp behind to the Pincio terrace for the classic view over Piazza del Popolo to St Peter's dome.",
      tips: ["Walk from Metro Flaminio through the Villa Borghese park to the Borghese Gallery, about 20 minutes."]
    },
    borghese: {
      name: "Borghese Gallery",
      area: "Villa Borghese",
      coords: [41.9142, 12.4922],
      price: 18, priceNote: "€16 + €2 mandatory reservation fee. Timed 2-hour slots, 180 people each. No tickets at the door.",
      hours: "Tue–Sun 09:00–19:00, slots on the hour. Closed Mondays.",
      link: "https://www.gebart.it/musei/galleria-borghese/",
      linkLabel: "Official booking (Gebart for Galleria Borghese)",
      desc: "Cardinal Scipione Borghese's 1613 villa holds the finest Bernini sculptures anywhere: Apollo and Daphne, the Rape of Proserpina, David. Plus six Caravaggios, Raphael's Deposition, Titian's Sacred and Profane Love and Canova's Pauline Bonaparte. Two hours is exactly right.",
      tips: ["Book the 15:00 slot for Thu 15 Oct now; slots sell out weeks ahead.", "Bags go in the free cloakroom."]
    },
    colosseum: {
      name: "Colosseum",
      area: "Ancient Rome",
      coords: [41.8902, 12.4922],
      price: 24, priceNote: "Standard 24h ticket €18 (levels 1–2 + Forum + Palatine). Full Experience Underground & Arena €24, valid 2 days, recommended for history lovers.",
      hours: "08:30–18:30 until 24 Oct, last entry 17:30.",
      link: "https://ticketing.colosseo.it/en/",
      linkLabel: "Official tickets (Parco archeologico del Colosseo)",
      desc: "The Flavian Amphitheatre, opened AD 80 by Titus, seated 50,000 for gladiatorial games and animal hunts. The Church has long venerated it as a place of martyrdom; the Pope leads the Good Friday Way of the Cross here. The Full Experience takes you onto the reconstructed arena floor and into the hypogeum, the underground corridors where lifts raised animals and scenery.",
      tips: ["Tickets release 30 days ahead at 09:00 Italian time and the first slots sell out: book now for Fri 16 Oct, 08:30.", "Tickets are nominal: enter the exact names on your passports.", "Max 75 minutes inside on the standard ticket."]
    },
    forum: {
      name: "Roman Forum & Palatine Hill",
      area: "Ancient Rome",
      coords: [41.8925, 12.4853],
      price: 0, priceNote: "Included in the Colosseum ticket.",
      hours: "09:00–18:30 until 24 Oct.",
      link: "https://colosseo.it/en/opening-times-and-tickets/",
      linkLabel: "Park opening times",
      desc: "The civic heart of Rome for a thousand years: the Senate House (Curia), the Rostra where Cicero spoke, the Temple of Caesar where his body was burned, the Arch of Titus showing the loot of the Jerusalem Temple, and the Mamertine Prison where tradition holds Peter and Paul were held. The Palatine above is where Romulus founded the city in 753 BC and where emperors built their palaces; the view over the Circus Maximus is superb.",
      tips: ["Enter the Forum from Largo della Salara Vecchia on Via dei Fori Imperiali after the Colosseum.", "Santa Maria Antiqua and the Temple of Romulus are 'SUPER' sites included in the Full Experience."]
    },
    san_pietro_vincoli: {
      name: "San Pietro in Vincoli",
      area: "Ancient Rome / Monti",
      coords: [41.8938, 12.4932],
      price: 0, priceNote: "Free",
      hours: "08:00–12:30 and 15:00–19:00",
      link: "https://www.turismoroma.it/en/places/basilica-di-san-pietro-vincoli",
      linkLabel: "Rome tourism info",
      desc: "Built in 442 to house the chains that bound St Peter in Jerusalem and in Rome, displayed under the high altar. Michelangelo's Moses, carved for the tomb of Julius II, sits in the right transept. Five minutes uphill from the Colosseum.",
      tips: ["Closes for lunch 12:30–15:00; visit after the Forum."]
    },
    capitoline: {
      name: "Capitoline Hill & Vittoriano terrace",
      area: "Ancient Rome",
      coords: [41.8933, 12.4828],
      price: 0, priceNote: "Square and the rear terrace over the Forum are free. Capitoline Museums €15 (€20.50 during exhibitions), optional.",
      hours: "Museums 09:30–19:30",
      link: "https://www.museicapitolini.org/en",
      linkLabel: "Capitoline Museums (official)",
      desc: "Michelangelo's trapezoid piazza on the hill of Jupiter's temple. The Capitoline Museums, the world's oldest public museum (1471), keep the Capitoline Wolf, the Dying Gaul and the original Marcus Aurelius bronze. The free terrace behind the Senator's Palace gives the best view down the length of the Forum. Santa Maria in Aracoeli, up 124 steps, holds the Santo Bambino.",
      tips: ["Optional museum stop if the weather turns; otherwise enjoy the views for free."]
    },
    ghetto_trastevere: {
      name: "Jewish Ghetto, Tiber Island & Santa Maria in Trastevere",
      area: "Trastevere",
      coords: [41.8894, 12.4698],
      price: 0, priceNote: "Free",
      hours: "Church 07:30–21:00",
      link: "https://www.turismoroma.it/en/places/basilica-di-santa-maria-trastevere",
      linkLabel: "Rome tourism info",
      desc: "Walk from the Capitoline through the Portico of Octavia and the old Ghetto (try the Jewish-Roman fried artichokes), across the Tiber Island with its 1st-century BC bridge, into Trastevere. Santa Maria in Trastevere, possibly the first church in Rome dedicated to Mary (3rd century, rebuilt 1140), glows with 12th- and 13th-century mosaics by Cavallini. Nearby Santa Cecilia stands over the house of the martyr.",
      tips: ["Climb the Gianicolo (Janiculum) hill from Trastevere for sunset at about 18:30 over the whole city; Bramante's Tempietto at San Pietro in Montorio marks the traditional site of Peter's crucifixion."]
    },
    catacombs: {
      name: "Catacombs of San Callisto & Appian Way",
      area: "Appia Antica",
      coords: [41.8588, 12.5116],
      price: 10, priceNote: "€10 including the mandatory guided tour (about 40 minutes). Online reservation required.",
      hours: "Thu–Tue 09:00–12:00 and 14:00–17:00. Closed Wednesdays.",
      link: "https://www.catacombesancallisto.it/en/",
      linkLabel: "Official site & booking",
      desc: "The official cemetery of the Church of Rome in the 3rd century: 20 km of galleries, half a million burials, the Crypt of the Popes with nine 3rd-century popes, and the original tomb of St Cecilia. The Appian Way outside is the Roman road of 312 BC; walk past Domine Quo Vadis, where Peter met Christ fleeing Rome, to the tomb of Cecilia Metella (about 2 km on original basalt paving).",
      tips: ["Bus 118 from Piazza Venezia or Circo Massimo (Metro B) stops at the catacombs; ask for 'Catacombe di San Callisto'.", "Wear a layer: it is 15°C underground."]
    },
    lateran: {
      name: "St John Lateran, Scala Santa & Santa Croce",
      area: "Esquiline / Lateran",
      coords: [41.8859, 12.5056],
      price: 0, priceNote: "Free. Cloister €3, optional.",
      hours: "Basilica 07:00–18:30. Scala Santa 06:00–14:00 and 15:00–18:30.",
      link: "https://www.vatican.va/various/basiliche/san_giovanni/index_en.html",
      linkLabel: "Vatican page for the basilica",
      desc: "The cathedral of Rome and 'mother of all churches', given by Constantine in 324, where the popes lived for a thousand years. The baptistery is the oldest in the world. Across the square, the Scala Santa are the 28 marble steps from Pilate's praetorium, brought by St Helena, climbed only on the knees. Ten minutes further, Santa Croce in Gerusalemme keeps the relics of the Passion that Helena brought from Jerusalem.",
      tips: ["Metro A to San Giovanni, or bus 85/87 from the centre.", "Papal altar reliquaries hold the heads of Sts Peter and Paul by tradition."]
    },
    maggiore: {
      name: "Santa Maria Maggiore (tomb of Pope Francis)",
      area: "Esquiline",
      coords: [41.8976, 12.4985],
      price: 0, priceNote: "Free. Museum and loggia tour optional.",
      hours: "07:00–18:45",
      link: "https://www.vatican.va/various/basiliche/sm_maggiore/index_en.html",
      linkLabel: "Vatican page for the basilica",
      desc: "The largest Marian church in Rome, founded after the Council of Ephesus (431) and the only patriarchal basilica to keep its early Christian structure. 5th-century mosaics line the nave; the relic of the Holy Crib lies under the altar; the icon Salus Populi Romani is the one Pope Francis prayed before after every journey. He was buried here on 26 April 2025 in a plain tomb inscribed simply 'Franciscus', in the aisle beside the Pauline Chapel.",
      tips: ["A 15-minute walk from the Lateran along Via Merulana.", "Expect a short queue for the tomb; no photography there."]
    },
    gesu: {
      name: "Il Gesù, Sant'Ignazio & Santa Maria sopra Minerva",
      area: "Centre",
      coords: [41.8958, 12.4797],
      price: 0, priceNote: "Free",
      hours: "Roughly 07:30–12:30 and 16:00–19:30",
      link: "https://www.chiesadelgesu.org/",
      linkLabel: "Il Gesù website",
      desc: "Three churches within five minutes of the Pantheon. Il Gesù is the Jesuit mother church with the tomb of St Ignatius and the rooms where he lived and died (open afternoons). Sant'Ignazio has Pozzo's astonishing painted fake dome. Santa Maria sopra Minerva, Rome's only Gothic church, holds the body of St Catherine of Siena, Michelangelo's Risen Christ and Bernini's elephant obelisk outside.",
      tips: ["Fits into the Day 1 evening walk between Navona and Trevi, or any spare hour."]
    },
    st_paul: {
      name: "St Paul Outside the Walls",
      area: "Ostiense",
      coords: [41.8587, 12.4765],
      price: 0, priceNote: "Free. Cloister €4, optional.",
      hours: "07:00–18:30",
      link: "https://www.basilicasanpaolo.org/",
      linkLabel: "Basilica website",
      desc: "Built over the tomb of St Paul, rebuilt after the 1823 fire to the original 4th-century plan. The tomb sarcophagus is visible under the altar; the portraits of every pope ring the nave (legend says when the spaces run out the world ends). Metro B to Basilica San Paolo, 10 minutes from Colosseo.",
      tips: ["Optional Sunday afternoon stop if your departure is late; completes the four major basilicas."]
    }
  },

  days: [
    {
      date: "Wed 14 Oct", title: "The Pope and St Peter's",
      colour: "#b8322e",
      summary: "Papal General Audience, basilica and dome, then an evening walk through the Baroque centre to the Pantheon and Trevi.",
      transport: "Metro A Ottaviano or bus 64/40 to St Peter's. Everything after the basilica is on foot (about 5 km).",
      stops: [
        { time: "07:45", place: "stpeters_square", note: "Join the security queue; seats fill by 09:00. Audience 10:00–12:00." },
        { time: "12:15", place: null, free: "Lunch in Borgo Pio, the quiet lanes just north of Via della Conciliazione." },
        { time: "14:00", place: "stpeters_basilica", note: "Dome slot 14:00: climb first, then the basilica and the papal tombs in the grottoes." },
        { time: "16:30", place: "castel_santangelo", note: "Walk down Via della Conciliazione, cross Ponte Sant'Angelo." },
        { time: "17:00", place: "piazza_navona", note: "Via Via dei Coronari. Pop into San Luigi dei Francesi for Caravaggio." },
        { time: "17:30", place: "pantheon", note: "Pre-booked 17:30 slot, last entry 18:30." },
        { time: "18:30", place: "gesu", note: "Sant'Ignazio and Santa Maria sopra Minerva if still open; otherwise save for later." },
        { time: "19:30", place: "trevi", note: "Dinner near Piazza di Pietra or the Trevi lanes, then the fountain by night." }
      ]
    },
    {
      date: "Thu 15 Oct", title: "Vatican Museums and Bernini",
      colour: "#d08a1b",
      summary: "The Sistine Chapel at opening, then north across the city to the Borghese Gallery via Caravaggio and the Pincio view.",
      transport: "Metro A Ottaviano in the morning; Metro A Ottaviano to Flaminio after lunch (3 stops), then walking.",
      stops: [
        { time: "08:00", place: "vatican_museums", note: "First slot. Allow until 11:30–12:00." },
        { time: "12:15", place: null, free: "Lunch in Prati (Via Cola di Rienzo area), then Metro A to Flaminio." },
        { time: "13:45", place: "popolo", note: "Caravaggio chapel, then up the ramp to the Pincio terrace and through Villa Borghese park (20 min walk)." },
        { time: "15:00", place: "borghese", note: "Timed 2-hour slot 15:00–17:00." },
        { time: "17:15", place: "trevi", note: "Walk down Via Veneto to the Spanish Steps (15 min), window shopping on Via Condotti; evening free in the centre." }
      ]
    },
    {
      date: "Fri 16 Oct", title: "Ancient Rome to Trastevere",
      colour: "#2f6f9f",
      summary: "Colosseum underground and arena, the Forum and Palatine, St Peter's chains, the Capitoline view, then across the river for sunset.",
      transport: "Metro B Colosseo in the morning. The rest is a 6 km walk; bus H or tram 8 back from Trastevere.",
      stops: [
        { time: "08:15", place: "colosseum", note: "Full Experience 08:30 slot; arena and underground tour inside, about 90 minutes." },
        { time: "10:30", place: "forum", note: "Enter at Largo della Salara Vecchia. Forum, then up to the Palatine. About 2.5 hours." },
        { time: "13:00", place: null, free: "Lunch in Monti (Via dei Serpenti / Via Urbana)." },
        { time: "15:00", place: "san_pietro_vincoli", note: "Reopens at 15:00. St Peter's chains and Michelangelo's Moses." },
        { time: "15:45", place: "capitoline", note: "Via Trajan's Column and the Imperial Fora. Free Forum terrace behind the Senator's Palace." },
        { time: "17:00", place: "ghetto_trastevere", note: "Ghetto, Tiber Island, Santa Maria in Trastevere. Gianicolo for sunset at 18:30 if legs allow." },
        { time: "19:30", place: null, free: "Dinner in Trastevere." }
      ]
    },
    {
      date: "Sat 17 Oct", title: "Catacombs, Appian Way and the Papal Basilicas",
      colour: "#4f8a3d",
      summary: "Early Christian Rome underground and along the Appian Way, then two of the four major basilicas and the tomb of Pope Francis.",
      transport: "Bus 118 from Piazza Venezia (or from Circo Massimo, Metro B) to the catacombs; 118 back to Piazza Venezia. Metro A to San Giovanni in the afternoon.",
      stops: [
        { time: "08:30", place: "catacombs", note: "Bus 118, about 25 min. 09:00 or 09:30 guided tour, then walk the Appian Way to Cecilia Metella and back (about 1.5 h)." },
        { time: "12:30", place: null, free: "Lunch at a trattoria on the Appia or back in the centre." },
        { time: "14:30", place: "lateran", note: "Basilica, baptistery, Scala Santa (opens 15:00), optionally Santa Croce in Gerusalemme." },
        { time: "17:00", place: "maggiore", note: "Walk Via Merulana (15 min). Tomb of Pope Francis, Salus Populi Romani, 5th-century mosaics." },
        { time: "18:30", place: null, free: "Evening in Monti, or the Trevi and Spanish Steps if you missed them." }
      ]
    },
    {
      date: "Sun 18 Oct", title: "Sunday Mass and the Angelus",
      colour: "#6f4f9f",
      summary: "Mass in St Peter's, the Pope's Angelus at noon, and a last basilica if your departure is late.",
      transport: "Metro A Ottaviano. Metro B to Basilica San Paolo for the optional afternoon.",
      stops: [
        { time: "09:30", place: "stpeters_basilica", note: "Sunday Masses run roughly hourly from 09:00 (10:30 at the altar of the Chair is the main one); check times on the basilica site. Go through security by 09:30." },
        { time: "11:30", place: "stpeters_square", note: "Angelus at 12:00 from the Apostolic Palace window; free, no ticket." },
        { time: "12:30", place: null, free: "Lunch in Borgo or Prati." },
        { time: "14:30", place: "st_paul", note: "Optional, 30 min by Metro A + B, if you have 2 spare hours before leaving." }
      ]
    }
  ],

  budget: [
    { item: "Papal General Audience (Wed)", pp: 0, qty: 2, core: true },
    { item: "St Peter's dome (stairs) incl. basilica priority entry + audio guide", pp: 17, qty: 2, core: true },
    { item: "Pantheon", pp: 7, qty: 2, core: true },
    { item: "Vatican Museums & Sistine Chapel (online)", pp: 25, qty: 2, core: true },
    { item: "Borghese Gallery incl. reservation fee", pp: 18, qty: 2, core: true },
    { item: "Colosseum Full Experience Underground & Arena + Forum + Palatine", pp: 24, qty: 2, core: true },
    { item: "Catacombs of San Callisto (guided)", pp: 10, qty: 2, core: true },
    { item: "ATAC weekly CIS pass (unlimited bus, metro, tram 7 days)", pp: 29, qty: 2, core: true },
    { item: "Castel Sant'Angelo interior (optional)", pp: 18, qty: 2, core: false },
    { item: "Capitoline Museums (optional)", pp: 15, qty: 2, core: false },
    { item: "Lateran cloister + St Paul's cloister (optional)", pp: 7, qty: 2, core: false },
    { item: "Vatican Museums audio guide (optional)", pp: 8, qty: 2, core: false }
  ],

  sources: [
    ["ATAC tickets and passes", "https://www.atac.roma.it/en/tickets-and-passes"],
    ["Parco archeologico del Colosseo, Colosseum/Forum/Palatine ticket", "https://colosseo.it/en/tickets/colosseum-roman-forum-palatine/"],
    ["Colosseum opening times and ticket types", "https://colosseo.it/en/opening-times-and-tickets/"],
    ["St Peter's Basilica dome booking (stairs)", "https://booking.basilicasanpietro.va/en/idea/52251275/-dome-with-stairs-includes-basilica-"],
    ["St Peter's Basilica opening hours", "https://www.basilicasanpietro.va/en/opening-hours"],
    ["Vatican Necropolis (Scavi) reservation", "https://visite.basilicasanpietro.va/en/booking/necropolivaticana"],
    ["Galleria Borghese ticket info", "https://galleriaborghese.cultura.gov.it/en/visita/info-biglietti/"],
    ["Prefecture of the Papal Household ticket portal", "https://eventi.pontificalisdomus.va/?lang=en-us"],
    ["Vatican General Audience 7 Oct 2026 (calendar)", "https://www.vatican.va/content/leo-xiv/en/events/event.dir.html/content/vaticanevents/en/2026/10/7/udienza-generale.html"],
    ["Pope Leo XIV travels 2026 (no October journey)", "https://www.vatican.va/content/leo-xiv/en/travels/2026.html"],
    ["Pantheon fee rise to €7 (Wanted in Rome)", "https://www.wantedinrome.com/news/rome-raises-entry-fee-for-pantheon-from-5-to-7.html"],
    ["Castel Sant'Angelo ticket (CoopCulture)", "https://www.coopculture.it/en/products/castel-santangelo-ticket-individual-up-to-9-people-00001/"],
    ["Vatican Museums prices 2026 (third-party; official site blocks robots)", "https://www.artvisitguide.com/vatican-museums-tickets-guide/"],
    ["Catacombs of San Callisto", "https://www.catacombesancallisto.it/en/"],
    ["Trainline: Livorno Centrale to Roma Termini", "https://www.thetrainline.com/en-us/train-times/livorno-centrale-to-roma-termini"]
  ]
};
