export type Clinic = {
  name: string;
  address: string;
  price: number;
  nextAvailable: string;
  nextDay: string;
  distance: string;
  tags: string[];
  image: string;
};

export const clinics: Clinic[] = [
  {
    name: "Bay Area Body Composition",
    address: "3000 El Camino Real, Palo Alto, CA",
    price: 95,
    nextAvailable: "Tomorrow",
    nextDay: "(May 22)",
    distance: "2.3 mi away",
    tags: ["DEXA Body Scan", "Walk-in available"],
    image: "/clinic-palo-alto.svg"
  },
  {
    name: "Longevity Health SF",
    address: "235 Montgomery St, San Francisco, CA",
    price: 119,
    nextAvailable: "May 24",
    nextDay: "(Friday)",
    distance: "4.7 mi away",
    tags: ["DEXA Body Scan", "Mobile scan"],
    image: "/clinic-sf.svg"
  },
  {
    name: "Performance Medicine Lab",
    address: "1990 North Shoreline Blvd, Mountain View, CA",
    price: 129,
    nextAvailable: "May 23",
    nextDay: "(Thursday)",
    distance: "6.1 mi away",
    tags: ["DEXA Body Scan", "Parking available"],
    image: "/clinic-mv.svg"
  },
  {
    name: "Precision Performance",
    address: "55 2nd St, San Francisco, CA",
    price: 139,
    nextAvailable: "May 25",
    nextDay: "(Saturday)",
    distance: "3.8 mi away",
    tags: ["DEXA Body Scan", "Walk-in available"],
    image: "/clinic-precision.svg"
  }
];
