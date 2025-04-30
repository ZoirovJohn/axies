interface NavigationType {
  id: number;
  name: string;
  path?: string | undefined;
}

export const navigation: NavigationType[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Products", path: "/explore-4" },
  { id: 3, name: "Live Auctions", path: "/live-auctions" },
  { id: 4, name: "Articles", path: "/blog" },
  { id: 5, name: "Creators", path: "/authors-1" },
  { id: 6, name: "Contact", path: "/contact-1" },
  { id: 6, name: "Ranking", path: "/ranking" },
];
