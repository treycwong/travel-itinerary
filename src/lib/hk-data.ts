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
    city: "Hong Kong",
    dates: "Apr 2-7",
    name: "Dash Living on Hollywood",
  },
];

export const tripDetails = {
  title: "6-Day HK Trip",
  dates: "April 2 – April 7, 2026",
  budget: "RM 3,500",
  flight: "AirAsia (Arrival in HK 5:55 PM | Departure from HK 6:30 PM)",
};

export const itineraryData: ItineraryDay[] = [
  {
    dayNumber: 1,
    date: "Thursday, Apr 2",
    title: "Departure & Hong Kong Arrival",
    activities: [
      {
        time: "10:45 AM",
        description: "Arrive at KLIA Terminal 2.",
        location: "KLIA Terminal 2",
      },
      {
        time: "1:50 PM",
        description: "Board your flight to Hong Kong.",
      },
      {
        time: "Evening",
        description:
          "Land in HK. Take the Airport Express and transit to your accommodation at Dash on Hollywood.",
        location: "Dash Living on Hollywood",
      },
      {
        time: "Night",
        description:
          "Settle in and step out for a relaxed first dinner in the neighborhood.",
      },
    ],
  },
  {
    dayNumber: 2,
    date: "Friday, Apr 3",
    title: "The Peak Tram & Wan Chai",
    activities: [
      {
        time: "Morning",
        description:
          "Stroll through the streets of Sheung Wan. Visit Man Mo Temple.",
        location: "Man Mo Temple",
      },
      {
        time: "Lunch",
        description: "Grab a bite at Lan Fong Yuen.",
        location: "Lan Fong Yuen",
      },
      {
        time: "Afternoon",
        description:
          "Head to the Central terminus to queue for the iconic Peak Tram. Ride up the steep incline and spend time taking in the skyline views from the top.",
        location: "Peak Tram",
      },
      {
        time: "Evening",
        description:
          "Ride back down and take a twilight walk along the aesthetic Star Street Precinct and the beautiful, lantern-lit Lee Tung Avenue.",
        location: "Star Street Precinct",
      },
      {
        time: "Night",
        description: "Enjoy dinner and head back to the hotel to rest.",
      },
    ],
  },
  {
    dayNumber: 3,
    date: "Saturday, Apr 4",
    title: "HK Harbour & Temple Street",
    activities: [
      {
        time: "Morning",
        description:
          "Experience traditional trolley-style dim sum at Luk On Kui.",
        location: "Luk On Kui",
      },
      {
        time: "Afternoon",
        description:
          "Head to Wan Chai and catch the iconic Star Ferry across Victoria Harbour. Disembark and explore K11 Musea.",
        location: "K11 Musea",
      },
      {
        time: "Evening",
        description: "Dive into the glow of Temple Street.",
        location: "Temple Street",
      },
      {
        time: "Night",
        description:
          "Return to the Tsim Sha Tsui Harbourfront to take in the illuminated night views before catching the ferry or MTR back to Hong Kong Island.",
        location: "Tsim Sha Tsui Harbourfront",
      },
    ],
  },
  {
    dayNumber: 4,
    date: "Sunday, Apr 5",
    title: "The Cable Car & Giant Buddha",
    activities: [
      {
        time: "Morning",
        description: "Transit to the Tung Chung Cable Car Terminal.",
        location: "Tung Chung",
      },
      {
        time: "Afternoon",
        description:
          "Take the breathtaking Ngong Ping 360 cable car ride up the mountains. Explore Ngong Ping Village, the towering Tian Tan Buddha, and the Po Lin Monastery.",
        location: "Ngong Ping 360",
      },
      {
        time: "Evening",
        description:
          "Begin your descent before 6:00 PM to beat the heaviest crowds heading back to the city.",
      },
      {
        time: "Night",
        description:
          "Return to Sheung Wan for a laid-back dinner near the hotel.",
      },
    ],
  },
  {
    dayNumber: 5,
    date: "Monday, Apr 6",
    title: "Relax-Easy Day",
    activities: [
      {
        time: "Morning",
        description: "Visit the Hong Kong Museum of Medical Sciences.",
        location: "Hong Kong Museum of Medical Sciences",
      },
      {
        time: "Afternoon",
        description:
          "Wan Chai for Roast Goose and Char Siu (barbecue pork). Shop around.",
        location: "Wan Chai",
      },
      {
        time: "Evening & Night",
        description:
          'Experience dinner at a traditional Dai Pai Dong (open-air food stall) for incredible "wok hei" flavors. Afterward, wind down at a nearby bar or speakeasy with a cocktail.',
      },
    ],
  },
  {
    dayNumber: 6,
    date: "Tuesday, Apr 7",
    title: "Departure & KL Arrival",
    activities: [
      {
        time: "Morning",
        description:
          "Pack up and complete your check-out from Dash on Hollywood.",
      },
      {
        time: "Afternoon",
        description:
          "Grab a final Hong Kong lunch—perhaps a comforting bowl of wonton noodles.",
      },
      {
        time: "2:00 PM",
        description:
          "Begin your transit to Hong Kong International Airport (HKIA).",
        location: "HKIA",
      },
      {
        time: "6:30 PM",
        description: "Your flight departs for Kuala Lumpur.",
      },
      {
        time: "10:35 PM",
        description: "Touch down safely at KLIA Terminal 2.",
        location: "KLIA Terminal 2",
      },
    ],
  },
];
