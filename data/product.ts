interface Product1Type {
  id: number;
  hert: number;
  status: string;
  img: string;
  auction: number;
  title: string;
  tag: string;
  eth: number;
  author: {
    status: string;
    name: string;
    avatar: string;
  };
  type: string;
  history?: boolean;
  collection: {
    status: string;
    name: string;
    avatar: string;
  };
}

export const product1: Product1Type[] = [
  {
    id: 1,
    hert: 100,
    status: "",
    img: "/assets/images/box-item/card-item8.webp",
    auction: 2.5,
    title: `"Hamlet Contemplates Contemplates"`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-11.webp",
    },
    type: "art",
    history: false,
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-18.jpg",
    },
  },
  {
    id: 2,
    hert: 220,
    status: "Coming Soon",
    img: "/assets/images/box-item/image-box-10.webp",
    auction: 6,
    title: `"Triumphant Awakening Contemplates"`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "Trista Francis",
      avatar: "/assets/images/avatar/avt-12.webp",
    },
    type: "music",
    history: true,
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-16.jpg",
    },
  },
  {
    id: 3,
    hert: 90,
    status: "",
    img: "/assets/images/box-item/image-box-11.webp",
    auction: 4.5,
    title: `"Living Vase 01 by Lanza Contemplates "`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "Freddie Carpenter",
      avatar: "/assets/images/avatar/avt-13.webp",
    },
    type: "collectibles",
    history: false,
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-17.jpg",
    },
  },
  {
    id: 4,
    hert: 145,
    status: "",
    img: "/assets/images/box-item/image-box-21.webp",
    auction: 3.1,
    title: `"Flame Dress' by Balmain Contemplates "`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "Tyler Covington",
      avatar: "/assets/images/avatar/avt-14.webp",
    },
    type: "sports",
    history: false,
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-18.jpg",
    },
  },
  {
    id: 5,
    hert: 100,
    status: "Coming Soon",
    img: "/assets/images/box-item/card-item8.webp",
    auction: 2.5,
    title: `"Hamlet Contemplates Contemplates"`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-11.webp",
    },
    type: "art",
    history: true,
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-18.jpg",
    },
  },
  {
    id: 6,
    hert: 220,
    status: "",
    img: "/assets/images/box-item/image-box-10.webp",
    auction: 6.2,
    title: `"Triumphant Awakening Contemplates "`,
    tag: "bsc",
    eth: 0.89,
    author: {
      status: "Creator",
      name: "Trista Francis",
      avatar: "/assets/images/avatar/avt-12.webp",
    },
    type: "music",
    history: true,
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-16.jpg",
    },
  },
  {
    id: 7,
    hert: 90,
    status: "",
    img: "/assets/images/box-item/image-box-11.webp",
    auction: 4.5,
    title: `"Living Vase 01 by Lanza Contemplates "`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "Freddie Carpenter",
      avatar: "/assets/images/avatar/avt-13.webp",
    },
    type: "collectibles",
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-17.jpg",
    },
  },
  {
    id: 8,
    hert: 100,
    status: "",
    img: "/assets/images/box-item/card-item-3.webp",
    auction: 4.5,
    title: `"Hamlet Contemplates Yorick's...`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-13.webp",
    },
    type: "sports",
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-18.jpg",
    },
  },
  {
    id: 9,
    hert: 100,
    status: "",
    img: "/assets/images/box-item/image-box-11.webp",
    auction: 4.5,
    title: `"Crypto Egg Stamp #5”`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-3.webp",
    },
    type: "art",
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-16.jpg",
    },
  },
  {
    id: 10,
    hert: 100,
    status: "",
    img: "/assets/images/box-item/card-item-2.webp",
    auction: 4.5,
    title: `"CyberPrimal 042 LAN”`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-4.webp",
    },
    type: "music",
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-17.jpg",
    },
  },
  {
    id: 11,
    hert: 100,
    status: "",
    img: "/assets/images/box-item/card-item-7.webp",
    auction: 4.5,
    title: `"Crypto Egg Stamp #5”`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-3.webp",
    },
    type: "collectibles",
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-18.jpg",
    },
  },
  {
    id: 12,
    hert: 100,
    status: "",
    img: "/assets/images/box-item/card-item-9.webp",
    auction: 4.5,
    title: `"Hamlet Contemplates Yorick's...`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-6.webp",
    },
    type: "sports",
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-16.jpg",
    },
  },
  {
    id: 13,
    hert: 100,
    status: "",
    img: "/assets/images/box-item/image-box-6.jpg",
    auction: 4.5,
    title: `"CyberPrimal 042 LAN”`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-4.webp",
    },
    type: "art",
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-17.jpg",
    },
  },
  {
    id: 14,
    hert: 100,
    status: "",
    img: "/assets/images/box-item/image-box-11.webp",
    auction: 4.5,
    title: `"Crypto Egg Stamp #5”`,
    tag: "bsc",
    eth: 4.89,
    author: {
      status: "Creator",
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-3.webp",
    },
    type: "music",
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-18.jpg",
    },
  },
  {
    id: 15,
    hert: 220,
    status: "",
    img: "/assets/images/box-item/image-box-10.webp",
    auction: 6.2,
    title: `"Triumphant Awakening Contemplates "`,
    tag: "bsc",
    eth: 0.89,
    author: {
      status: "Creator",
      name: "Trista Francis",
      avatar: "/assets/images/avatar/avt-12.webp",
    },
    type: "collectibles",
    collection: {
      status: "Collection",
      name: "Colorful Abstract",
      avatar: "/assets/images/avatar/avt-16.jpg",
    },
  },
];

interface Product2Type {
  id: number;
  hert: number;
  gallery: string[];
  author: {
    avatar: string;
    title: string;
    name: string;
  };
}

export const product2: Product2Type[] = [
  {
    id: 1,
    hert: 100,
    gallery: [
      "/assets/images/box-item/collection-item-2.webp",
      "/assets/images/box-item/collection-item-top-1.webp",
      "/assets/images/box-item/collection-item-top-2.webp",
      "/assets/images/box-item/collection-item-bottom-4.webp",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-1.webp",
      title: "Creative Art Collection",
      name: "Ralph Garraway",
    },
  },
  {
    id: 2,
    hert: 100,
    gallery: [
      "/assets/images/box-item/img-collection23.webp",
      "/assets/images/box-item/img-collection23.webp",
      "/assets/images/box-item/img-collection10.webp",
      "/assets/images/box-item/img-collection11.webp",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-8.webp",
      title: "Colorful Abstract",
      name: "Mason Woodward",
    },
  },
  {
    id: 3,
    hert: 100,
    gallery: [
      "/assets/images/box-item/img-collection12.webp",
      "/assets/images/box-item/img-collection18.webp",
      "/assets/images/box-item/img-collection25.webp",
      "/assets/images/box-item/img-collection17.webp",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-7.webp",
      title: "Modern Art Collection",
      name: "Freddie Carpenter",
    },
  },
  {
    id: 4,
    hert: 100,
    gallery: [
      "/assets/images/box-item/collection-item-2.webp",
      "/assets/images/box-item/collection-item-top-1.webp",
      "/assets/images/box-item/collection-item-top-2.webp",
      "/assets/images/box-item/collection-item-bottom-4.webp",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-1.webp",
      title: "Creative Art Collection",
      name: "Ralph Garraway",
    },
  },
  {
    id: 5,
    hert: 100,
    gallery: [
      "/assets/images/box-item/img-collection23.webp",
      "/assets/images/box-item/img-collection23.webp",
      "/assets/images/box-item/img-collection10.webp",
      "/assets/images/box-item/img-collection11.webp",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-8.webp",
      title: "Colorful Abstract",
      name: "Mason Woodward",
    },
  },
  {
    id: 6,
    hert: 100,
    gallery: [
      "/assets/images/box-item/collection-item-2.webp",
      "/assets/images/box-item/collection-item-top-1.webp",
      "/assets/images/box-item/collection-item-top-2.webp",
      "/assets/images/box-item/collection-item-bottom-4.webp",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-1.webp",
      title: "Creative Art Collection",
      name: "Ralph Garraway",
    },
  },
  {
    id: 7,
    hert: 100,
    gallery: [
      "/assets/images/box-item/img-collection23.webp",
      "/assets/images/box-item/img-collection23.webp",
      "/assets/images/box-item/img-collection10.webp",
      "/assets/images/box-item/img-collection11.webp",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-8.webp",
      title: "Colorful Abstract",
      name: "Mason Woodward",
    },
  },
  {
    id: 8,
    hert: 100,
    gallery: [
      "/assets/images/box-item/img-collection12.webp",
      "/assets/images/box-item/img-collection18.webp",
      "/assets/images/box-item/img-collection25.webp",
      "/assets/images/box-item/img-collection17.webp",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-7.webp",
      title: "Modern Art Collection",
      name: "Freddie Carpenter",
    },
  },
  {
    id: 9,
    hert: 100,
    gallery: [
      "/assets/images/box-item/collection-item-2.webp",
      "/assets/images/box-item/collection-item-top-1.webp",
      "/assets/images/box-item/collection-item-top-2.webp",
      "/assets/images/box-item/collection-item-bottom-4.webp",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-1.webp",
      title: "Creative Art Collection",
      name: "Ralph Garraway",
    },
  },
  {
    id: 10,
    hert: 100,
    gallery: [
      "/assets/images/box-item/img-collection23.webp",
      "/assets/images/box-item/img-collection23.webp",
      "/assets/images/box-item/img-collection10.webp",
      "/assets/images/box-item/img-collection11.webp",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-8.webp",
      title: "Colorful Abstract",
      name: "Mason Woodward",
    },
  },
];

interface Product3Type {
  id: number;
  status: string;
  hert: number;
  img: string;
  title: string;
  tag: string;
  eth: number;
  author: {
    name: string;
    avatar: string;
  };
}

export const product3: Product3Type[] = [
  {
    id: 1,
    status: "",
    hert: 100,
    img: "/assets/images/box-item/card-item-3.webp",
    title: `"The RenaiXance Rising the sun  "`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-1.webp",
    },
  },
  {
    id: 2,
    status: "Coming Soon",
    hert: 100,
    img: "/assets/images/box-item/card-item-4.webp",
    title: `"Space babe - Night 2/25”`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-2.webp",
    },
  },
  {
    id: 3,
    status: "",
    hert: 100,
    img: "/assets/images/box-item/card-item-2.webp",
    title: `"Living Vase 01 by Lanz...`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-4.webp",
    },
  },
  {
    id: 4,
    status: "",
    hert: 100,
    img: "/assets/images/box-item/card-item-7.webp",
    title: `"Crypto Egg Stamp #5”`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-3.webp",
    },
  },
  {
    id: 5,
    status: "",
    hert: 100,
    img: "/assets/images/box-item/card-item8.webp",
    title: `"Travel Monkey Club #45”`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "Ralph Garraway",
      avatar: "/assets/images/avatar/avt-12.webp",
    },
  },
  {
    id: 6,
    status: "",
    hert: 100,
    img: "/assets/images/box-item/card-item-9.webp",
    title: `"Sir. Lion Swag #371"`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "Mason Woodward",
      avatar: "/assets/images/avatar/avt-1.webp",
    },
  },
  {
    id: 7,
    status: "",
    hert: 100,
    img: "/assets/images/box-item/image-box-11.webp",
    title: `"Living Vase 01 by Lanz...`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "Tyler Covington",
      avatar: "/assets/images/avatar/avt-3.webp",
    },
  },
  {
    id: 8,
    status: "",
    hert: 100,
    img: "/assets/images/box-item/card-item8.webp",
    title: `"Travel Monkey Club #45”`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "Ralph Garraway",
      avatar: "/assets/images/avatar/avt-12.webp",
    },
  },
  {
    id: 9,
    status: "",
    hert: 100,
    img: "/assets/images/box-item/card-item-3.webp",
    title: `"The RenaiXance Rising the sun  "`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-1.webp",
    },
  },
  {
    id: 10,
    status: "Coming Soon",
    hert: 100,
    img: "/assets/images/box-item/card-item-4.webp",
    title: `"Space babe - Night 2/25”`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-2.webp",
    },
  },
  {
    id: 11,
    status: "",
    hert: 100,
    img: "/assets/images/box-item/card-item-2.webp",
    title: `"Living Vase 01 by Lanz...`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-4.webp",
    },
  },
  {
    id: 12,
    status: "",
    hert: 100,
    img: "/assets/images/box-item/card-item-7.webp",
    title: `"Crypto Egg Stamp #5”`,
    tag: "bsc",
    eth: 4.89,
    author: {
      name: "SalvadorDali",
      avatar: "/assets/images/avatar/avt-3.webp",
    },
  },
];

interface Product4Type {
  id: number;
  hert: number;
  gallery: string[];
  author: {
    avatar: string;
    title: string;
    name: string;
  };
}

export const product4: Product4Type[] = [
  {
    id: 1,
    hert: 100,
    gallery: [
      "/assets/images/box-item/collection-item-2.webp",
      "/assets/images/box-item/collection-item-bottom-4.webp",
      "/assets/images/box-item/collection-item-top-1.webp",
      "/assets/images/box-item/collection-item-top-2.webp",
      "/assets/images/box-item/img-collection3.jpg",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-1.webp",
      title: "Creative Art Collection",
      name: "Ralph Garraway",
    },
  },
  {
    id: 2,
    hert: 100,
    gallery: [
      "/assets/images/box-item/image-box-12.jpg",
      "/assets/images/box-item/collection-item-11.jpg",
      "/assets/images/box-item/img-collection6.jpg",
      "/assets/images/box-item/img-collection1.jpg",
      "/assets/images/box-item/img-collection3.jpg",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-8.webp",
      title: "Colorful Abstract",
      name: "Mason Woodward",
    },
  },
  {
    id: 3,
    hert: 100,
    gallery: [
      "/assets/images/box-item/image-box-16.jpg",
      "/assets/images/box-item/image-box-1.jpg",
      "/assets/images/box-item/img-collection2.jpg",
      "/assets/images/box-item/collection-item-10.jpg",
      "/assets/images/box-item/img-collection8.jpg",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-7.webp",
      title: "Modern Art Collection",
      name: "Freddie Carpenter",
    },
  },
  {
    id: 4,
    hert: 100,
    gallery: [
      "/assets/images/box-item/collection-item-2.webp",
      "/assets/images/box-item/collection-item-bottom-4.webp",
      "/assets/images/box-item/collection-item-top-1.webp",
      "/assets/images/box-item/collection-item-top-2.webp",
      "/assets/images/box-item/img-collection3.jpg",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-1.webp",
      title: "Creative Art Collection",
      name: "Ralph Garraway",
    },
  },
  {
    id: 5,
    hert: 100,
    gallery: [
      "/assets/images/box-item/image-box-12.jpg",
      "/assets/images/box-item/collection-item-11.jpg",
      "/assets/images/box-item/img-collection6.jpg",
      "/assets/images/box-item/img-collection1.jpg",
      "/assets/images/box-item/img-collection3.jpg",
    ],
    author: {
      avatar: "/assets/images/avatar/avt-8.webp",
      title: "Colorful Abstract",
      name: "Mason Woodward",
    },
  },
];

interface Product5Type {
  id: number;
  gallery: string[];
  item: number;
  author: {
    avatar: string;
    name: string;
  };
}

export const product5: Product5Type[] = [
  {
    id: 1,
    gallery: [
      "/assets/images/box-item/collection-item-2.webp",
      "/assets/images/box-item/collection-item-top-1.webp",
      "/assets/images/box-item/collection-item-top-2.webp",
      "/assets/images/box-item/collection-item-bottom-4.webp",
    ],
    item: 12,
    author: {
      avatar: "/assets/images/avatar/avt-1.webp",
      name: "Ralph Garraway",
    },
  },
  {
    id: 2,
    gallery: [
      "/assets/images/box-item/img-collection23.webp",
      "/assets/images/box-item/img-collection24.jpg",
      "/assets/images/box-item/img-collection10.webp",
      "/assets/images/box-item/img-collection11.webp",
    ],
    item: 26,
    author: {
      avatar: "/assets/images/avatar/avt-8.webp",
      name: "Mason Woodward",
    },
  },
  {
    id: 3,
    gallery: [
      "/assets/images/box-item/img-collection12.webp",
      "/assets/images/box-item/img-collection18.webp",
      "/assets/images/box-item/img-collection25.webp",
      "/assets/images/box-item/img-collection17.webp",
    ],
    item: 26,
    author: {
      avatar: "/assets/images/avatar/avt-7.webp",
      name: "Freddie Carpenter",
    },
  },
  {
    id: 4,
    gallery: [
      "/assets/images/box-item/image-box-15.webp",
      "/assets/images/box-item/image-box-18.webp",
      "/assets/images/box-item/image-box-14.webp",
      "/assets/images/box-item/img-collection13.webp",
    ],
    item: 12,
    author: {
      avatar: "/assets/images/avatar/avt-1.webp",
      name: "Ralph Garraway",
    },
  },
  {
    id: 5,
    gallery: [
      "/assets/images/box-item/img-collection14.webp",
      "/assets/images/box-item/img-collection15.webp",
      "/assets/images/box-item/img-collection16.webp",
      "/assets/images/box-item/img-collection19.webp",
    ],
    item: 18,
    author: {
      avatar: "/assets/images/avatar/avt-8.webp",
      name: "Mason Woodward",
    },
  },
  {
    id: 6,
    gallery: [
      "/assets/images/box-item/image-box-17.webp",
      "/assets/images/box-item/img-collection22.webp",
      "/assets/images/box-item/img-collection21.webp",
      "/assets/images/box-item/img-collection20.webp",
    ],
    item: 17,
    author: {
      avatar: "/assets/images/avatar/avt-7.webp",
      name: "Freddie Carpenter",
    },
  },
];

interface Product6Type {
  id: number;
  img: string;
  title: string;
  author: {
    img: string;
    name: string;
  };
}

export const product6: Product6Type[] = [
  {
    id: 1,
    img: "/assets/images/box-item/img1rank.webp",
    title: `"Hamlet Contemplates Yorick's Yorick's`,
    author: {
      img: "/assets/images/avatar/author_rank.webp",
      name: "SalvadorDali",
    },
  },
  {
    id: 2,
    img: "/assets/images/box-item/img2rank.webp",
    title: `"Hamlet Contemplates Yorick's Yorick's`,
    author: {
      img: "/assets/images/avatar/author_rank.webp",
      name: "SalvadorDali",
    },
  },
  {
    id: 3,
    img: "/assets/images/box-item/img3rank.webp",
    title: `"Hamlet Contemplates Yorick's Yorick's`,
    author: {
      img: "/assets/images/avatar/author_rank.webp",
      name: "SalvadorDali",
    },
  },
  {
    id: 4,
    img: "/assets/images/box-item/img4rank.webp",
    title: `"Hamlet Contemplates Yorick's Yorick's`,
    author: {
      img: "/assets/images/avatar/author_rank.webp",
      name: "SalvadorDali",
    },
  },
  {
    id: 5,
    img: "/assets/images/box-item/img5rank.webp",
    title: `"Hamlet Contemplates Yorick's Yorick's`,
    author: {
      img: "/assets/images/avatar/author_rank.webp",
      name: "SalvadorDali",
    },
  },
  {
    id: 6,
    img: "/assets/images/box-item/img6rank.webp",
    title: `"Hamlet Contemplates Yorick's Yorick's`,
    author: {
      img: "/assets/images/avatar/author_rank.webp",
      name: "SalvadorDali",
    },
  },
];

interface Product7Type {
  id: number;
  name: string;
  img: string;
}

export const product7: Product7Type[] = [
  {
    id: 1,
    name: "Music",
    img: "/assets/images/box-item/imgslider2category.jpg",
  },
  {
    id: 2,
    name: "Domain Names",
    img: "/assets/images/box-item/imgslider3category.jpg",
  },
  {
    id: 3,
    name: "Virutal world",
    img: "/assets/images/box-item/imgslider4category.jpg",
  },
  {
    id: 4,
    name: "Utility",
    img: "/assets/images/box-item/imgslider5category.jpg",
  },
  {
    id: 5,
    name: "Sports",
    img: "/assets/images/box-item/imgslider6category.jpg",
  },
  {
    id: 6,
    name: "Art",
    img: "/assets/images/box-item/imgslider1category.jpg",
  },
  {
    id: 7,
    name: "Music",
    img: "/assets/images/box-item/imgslider2category.jpg",
  },
  {
    id: 8,
    name: "Domain Names",
    img: "/assets/images/box-item/imgslider3category.jpg",
  },
  {
    id: 9,
    name: "Virutal world",
    img: "/assets/images/box-item/imgslider4category.jpg",
  },
  {
    id: 10,
    name: "Utility",
    img: "/assets/images/box-item/imgslider5category.jpg",
  },
];

interface Product8Type {
  id: number;
  hert: number;
  img: string;
  author: {
    avatar: string;
    title: string;
    name: string;
  };
}

export const product8: Product8Type[] = [
  {
    id: 1,
    hert: 100,
    img: "/assets/images/box-item/collection-item-14.jpg",
    author: {
      avatar: "/assets/images/avatar/avt-1.webp",
      title: "Creative Art Collection",
      name: "Ralph Garraway",
    },
  },
  {
    id: 2,
    hert: 100,
    img: "/assets/images/box-item/collection-item-15.jpg",
    author: {
      avatar: "/assets/images/avatar/",
      title: "Colorful Abstract",
      name: "Mason Woodward",
    },
  },
  {
    id: 3,
    hert: 100,
    img: "/assets/images/box-item/collection-item-16.jpg",
    author: {
      avatar: "/assets/images/avatar/avt-7.webp",
      title: "Modern Art Collection",
      name: "Freddie Carpenter",
    },
  },
  {
    id: 4,
    hert: 100,
    img: "/assets/images/box-item/collection-item-14.jpg",
    author: {
      avatar: "/assets/images/avatar/avt-1.webp",
      title: "Creative Art Collection",
      name: "Ralph Garraway",
    },
  },
  {
    id: 5,
    hert: 100,
    img: "/assets/images/box-item/collection-item-15.jpg",
    author: {
      avatar: "/assets/images/avatar/avt-8.webp",
      title: "Colorful Abstract",
      name: "Mason Woodward",
    },
  },
  {
    id: 6,
    hert: 100,
    img: "/assets/images/box-item/collection-item-16.jpg",
    author: {
      avatar: "/assets/images/avatar/avt-7.webp",
      title: "Modern Art Collection",
      name: "Freddie Carpenter",
    },
  },
];
