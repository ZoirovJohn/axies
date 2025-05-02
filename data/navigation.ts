type NavigationType = {
  id: number;
  name: string;
  path: string;
  dropdown?: NavigationType[];
};

const authMember = true;

let navigation: NavigationType[];

if (authMember) {
  navigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Products", path: "/explore-4" },
    { id: 3, name: "Live Auctions", path: "/live-auctions" },
    { id: 4, name: "Blogs", path: "/blog" },
    { id: 5, name: "Creators", path: "/authors-1" },
    {
      id: 6,
      name: "More",
      path: "/",
      dropdown: [
        {
          id: 1,
          name: "Ranking",
          path: "/ranking",
        },
        {
          id: 2,
          name: "My Profile",
          path: "/edit-profile",
        },
        {
          id: 3,
          name: "Create NFT",
          path: "/create-item",
        },
        {
          id: 4,
          name: "Contact",
          path: "/contact-1",
        },
        {
          id: 5,
          name: "FAQ",
          path: "/faq",
        },
      ],
    },
  ];
} else {
  navigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Products", path: "/explore-4" },
    { id: 3, name: "Live Auctions", path: "/live-auctions" },
    { id: 4, name: "Blogs", path: "/blog" },
    { id: 5, name: "Creators", path: "/authors-1" },
    {
      id: 6,
      name: "Register",
      path: "#",
      dropdown: [
        {
          id: 1,
          name: "Login",
          path: "/login",
        },
        {
          id: 2,
          name: "Sing Up",
          path: "/signup",
        },
      ],
    },
  ];
}

export { navigation };
