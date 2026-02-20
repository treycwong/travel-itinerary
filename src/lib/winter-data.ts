export type ItineraryDay = {
  dayNumber: number;
  date: string;
  title: string;
  activities: {
    time: string;
    description: string;
    location?: string;
    url?: string;
  }[];
  notes?: string;
};

export const accommodations = [
  {
    city: "Vienna",
    dates: "Dec 17-21, Dec 26",
    name: "Wombats City Hostel Vienna Naschmarkt",
    url: "https://www.wombats-hostels.com/vienna/naschmarkt",
  },
  {
    city: "Prague",
    dates: "Dec 21-26",
    name: "Czech Inn, Vinohrady",
    url: "https://czech-inn.com/",
  },
];

export const tripDetails = {
  title: "10-Day Winter Trip: Vienna & Prague",
  dates: "December 17 – December 27, 2026",
  budget: "RM 12,000",
  flight: "Emirates (Arrival in VIE 12:15 PM | Departure from VIE 9:45 PM)",
  startDate: "2026-12-17T12:15:00Z", // Approximate landing time in UTC/Local depending on interpretation
};

export const itineraryData: ItineraryDay[] = [
  {
    dayNumber: 1,
    date: "Wednesday, Dec 17",
    title: "Arrival & The Grand Welcome",
    activities: [
      {
        time: "12:15 PM",
        description: "Land at Vienna International Airport (VIE).",
        location: "Vienna International Airport",
      },
      {
        time: "2:00 PM",
        description:
          "Transit to the city center and check in to Wombats City Hostel.",
        location: "Wombats City Hostel Vienna",
      },
      {
        time: "Evening",
        description:
          "Walk to the Rathausplatz Christmas Market. Grab a hot Käsekrainer (cheese-filled pork sausage) from a street vendor and enjoy the massive light displays against the Neo-Gothic City Hall.",
        location: "Rathausplatz Christmas Market",
        url: "https://www.wienerweihnachtstraum.at/en/christkindlmarkt-und-eistraum/",
      },
    ],
  },
  {
    dayNumber: 2,
    date: "Thursday, Dec 18",
    title: "Classical Aesthetics & Mozart",
    activities: [
      {
        time: "Morning",
        description:
          "Visit the MAK (Museum of Applied Arts). A phenomenal space to study the evolution of functional design, typography, and spatial aesthetics.",
        location: "MAK",
        url: "https://www.mak.at/en",
      },
      {
        time: "Afternoon",
        description:
          "Relax at Café Central. The soaring vaulted ceilings and marble columns provide excellent perspective lines for observational sketching. Order their rich hot chocolate or a fresh juice.",
        location: "Café Central",
        url: "https://www.cafecentral.wien/en/",
      },
      {
        time: "Evening",
        description:
          "Attend a live Mozart Concert at the acoustically perfect Musikverein (Golden Hall).",
        location: "Musikverein",
        url: "https://www.musikverein.at/en",
      },
    ],
  },
  {
    dayNumber: 3,
    date: "Friday, Dec 19",
    title: "The Alpine Escape",
    activities: [
      {
        time: "All Day",
        description:
          "Hallstatt Guided Bus Tour. Scenic drive through the Salzkammergut lake district, funicular ride up to the Skywalk for panoramic mountain views, and exploring the 16th-century Alpine houses.",
        url: "https://www.klook.com/en-MY/activity/20876-hallstatt-day-tour-vienna/?spm=HotelAPI_HotelListing.SearchSuggest_LIST&clickId=a378bca799",
      },
    ],
  },
  {
    dayNumber: 4,
    date: "Saturday, Dec 20",
    title: "Imperial Art & Traditional Fare",
    activities: [
      {
        time: "Morning",
        description:
          "Visit the Upper Belvedere Palace right at opening time to view Gustav Klimt’s The Kiss before the weekend crowds arrive.",
        location: "Upper Belvedere Palace",
        url: "https://www.belvedere.at/en/visit/upper-belvedere",
      },
      {
        time: "Afternoon",
        description:
          "Browse the Naschmarkt, located right next to the hostel, for local spices and street food.",
        location: "Naschmarkt",
      },
      {
        time: "Dinner",
        description:
          "Treat yourself to a traditional Viennese dinner—either a massive Wiener Schnitzel or Tafelspitz (tender boiled beef in a copper pot).",
      },
    ],
  },
  {
    dayNumber: 5,
    date: "Sunday, Dec 21",
    title: "The Bohemian Train",
    activities: [
      {
        time: "Morning",
        description:
          "Check out and take the direct ÖBB Railjet train from Vienna to Prague (approx. 4.5 hours).",
        url: "https://www.oebb.at/en/",
      },
      {
        time: "Afternoon",
        description:
          "Arrive in Prague and check in to the Czech Inn in the trendy Vinohrady neighborhood.",
        location: "Francouzská 240/76, 101 00 Praha 10-Vršovice, Czechia",
      },
      {
        time: "Evening",
        description:
          "Walk across the iconic Charles Bridge at dusk. The looming Gothic statues against the winter sky create a moody, highly graphic atmosphere.",
        location: "Charles Bridge",
      },
    ],
  },
  {
    dayNumber: 6,
    date: "Monday, Dec 22",
    title: "Prague Art & Illustration Focus",
    activities: [
      {
        time: "Morning",
        description:
          "Visit the Mucha Foundation Art Museum. Study Alphonse Mucha’s intricate line work, dynamic compositions, and mastery of the Art Nouveau style.",
        location: "Mucha Museum",
        url: "https://www.mucha.cz/en/",
      },
      {
        time: "Afternoon",
        description:
          "Unwind at Café Louvre, an airy century-old cafe perfect for lingering over a sketchbook. They serve some of the thickest hot chocolate in Prague.",
        location: "Café Louvre",
        url: "https://www.cafelouvre.cz/en/",
      },
      {
        time: "Evening",
        description:
          "Head to the Old Town Square, climb the Astronomical Clock tower for a bird's-eye view of the markets, and snack on a hot Trdelník (chimney cake).",
        location: "Old Town Square",
      },
    ],
  },
  {
    dayNumber: 7,
    date: "Tuesday, Dec 23",
    title: "The Medieval Day Tour",
    activities: [
      {
        time: "All Day",
        description:
          "Český Krumlov Guided Bus Tour. Explore this stunningly preserved, fairy-tale medieval town built around a dramatic horseshoe bend in the Vltava River.",
        url: "https://www.klook.com/en-US/activity/108938-prague-to-cesky-krumlov-one-day-trip/?spm=Activity.SearchSuggest_LIST&clickId=52a8e82ec2",
      },
      {
        time: "Dinner",
        description:
          "Return to Prague and head to U Fleků, a historic 500-year-old tavern with lively communal seating. The perfect spot to conquer a giant Vepřové Koleno (crispy slow-roasted pork knuckle).",
        location: "U Fleků",
        url: "https://ufleku.cz/en/",
      },
    ],
  },
  {
    dayNumber: 8,
    date: "Wednesday, Dec 24",
    title: "Christmas Eve Magic",
    activities: [
      {
        time: "Morning",
        description:
          "While the rest of Europe shuts down, Prague’s Christmas markets remain fully open. Perfect time for souvenir shopping.",
      },
      {
        time: "Afternoon",
        description:
          "Explore the massive Prague Castle complex. St. Vitus Cathedral's towering Gothic spires are spectacular in the winter.",
        location: "Prague Castle",
        url: "https://www.hrad.cz/en/prague-castle-for-visitors",
      },
      {
        time: "Dinner",
        description:
          "Critical: Ensure you have a pre-booked restaurant reservation for tonight, as open spots will fill up quickly!",
      },
    ],
  },
  {
    dayNumber: 9,
    date: "Thursday, Dec 25",
    title: "Christmas Day",
    activities: [
      {
        time: "All Day",
        description:
          "A relaxed, slow-paced day. Spend time at the Old Town Square market eating local street food and soaking in the holiday energy. Wander through the Lesser Town (Malá Strana) for quieter, snow-dusted cobblestone streets.",
      },
    ],
  },
  {
    dayNumber: 10,
    date: "Friday, Dec 26",
    title: "Return to Vienna",
    activities: [
      {
        time: "Morning",
        description: "Final Prague breakfast and check-out.",
      },
      {
        time: "Afternoon",
        description: "Take the scenic train back to Vienna.",
        url: "https://www.oebb.at/en/",
      },
      {
        time: "Evening",
        description:
          "Check back into Wombats City Hostel (or an airport hotel) for your final night in Europe.",
      },
    ],
  },
  {
    dayNumber: 11,
    date: "Saturday, Dec 27",
    title: "Departure",
    activities: [
      {
        time: "Morning/Afternoon",
        description:
          "Store luggage at the hostel or train station. Use this free time to visit the Albertina Museum for world-class graphic arts or do some final shopping.",
        location: "Albertina Museum",
        url: "https://www.albertina.at/en/",
      },
      {
        time: "6:30 PM",
        description: "Head to Vienna International Airport (VIE).",
      },
      {
        time: "9:45 PM",
        description: "Flight departs for Kuala Lumpur.",
      },
    ],
  },
];
