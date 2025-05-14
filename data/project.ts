interface Faq {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
}

export const faq: Faq[] = [
  {
    id: 1,
    title: "What is an NFT?",
    description: `NFTs or non-fungible tokens, are
    cryptographic assets on blockchain
    with unique identification codes and
    metadata that distinguish them from
    each other. NFTs are unique and not
    mutually interchangeable, which
    means no two NFTs are the same.`,
    isActive: false,
  },
  {
    id: 2,
    title: "Customer support is available ?",
    description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud
        exercitation.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit,
        sed do eiusmod.`,
    isActive: false,
  },
  {
    id: 3,
    title: " How do I find my transaction hash?",
    description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud
        exercitation.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit,
        sed do eiusmod.`,
    isActive: false,
  },
  {
    id: 4,
    title: "What are gas fees on Axies?",
    description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud
        exercitation.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit,
        sed do eiusmod.`,
    isActive: false,
  },
  {
    id: 5,
    title: "What is the effective staking amount?",
    description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud
        exercitation.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit,
        sed do eiusmod.`,
    isActive: false,
  },
];




interface Category1 {
  id: number;
  name: string;
  img: string;
}

export const category1: Category1[] = [
  {
    id: 1,
    name: "Digital Art",
    img: "/assets/images/box-item/img_category1.jpg",
  },
  {
    id: 2,
    name: "Style",
    img: "/assets/images/box-item/img_category2.jpg",
  },
  {
    id: 3,
    name: "Music",
    img: "/assets/images/box-item/img_category3.jpg",
  },
  {
    id: 4,
    name: "Domain Name",
    img: "/assets/images/box-item/img_category4.jpg",
  },
  {
    id: 5,
    name: "Utilities",
    img: "/assets/images/box-item/img_category6.jpg",
  },
  {
    id: 6,
    name: "Digital Art",
    img: "/assets/images/box-item/img_category1.jpg",
  },
  {
    id: 7,
    name: "Style",
    img: "/assets/images/box-item/img_category2.jpg",
  },
  {
    id: 8,
    name: "Music",
    img: "/assets/images/box-item/img_category3.jpg",
  },
  {
    id: 9,
    name: "Domain Name",
    img: "/assets/images/box-item/img_category4.jpg",
  },
  {
    id: 10,
    name: "Utilities",
    img: "/assets/images/box-item/img_category6.jpg",
  },
];
