export type Trip = {
  id: string;
  title: string;
  slug: string;
  dates: string;
  destination: string;
  image?: string;
  status: "upcoming" | "past" | "planning";
};

export type TripsByYear = {
  year: number;
  trips: Trip[];
};

export const tripsData: TripsByYear[] = [
  {
    year: 2026,
    trips: [
      {
        id: "winter-2026",
        title: "Winter Getaway",
        slug: "winter-2026",
        dates: "Dec 17 – Dec 27",
        destination: "Vienna & Prague",
        image: "/images/winter.png",
        status: "upcoming",
      },
      {
        id: "hk-2026",
        title: "Hong Kong Trip",
        slug: "hk-2026",
        dates: "Date TBD",
        destination: "Hong Kong",
        image: "/images/hk.png",
        status: "planning",
      },
    ],
  },
];
