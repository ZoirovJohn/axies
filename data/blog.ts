interface BlogType {
  id: number;
  img: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: number;
}

export const blog: BlogType[] = [
  {
    id: 1,
    img: "/assets/images/blog/thumb-1.webp",
    title: "2025년 암호화폐의 미래 탐색",
    description:
      "암호화폐는 2025년과 그 이후 금융과 디지털 자산을 형성하는 새로운 혁신으로 진화하고 있습니다.",
    author: {
      name: "살바도르 달리",
      avatar: "/assets/images/avatar/avt-2.webp",
    },
    createdAt: new Date("2025-02-18").getTime(),
  },
  {
    id: 2,
    img: "/assets/images/blog/thumg-3-1.webp",
    title: "블록체인이 실생활 앱에 미치는 영향",
    description:
      "2025년에는 헬스케어부터 물류까지 블록체인의 실용적인 활용이 빠르게 확산되고 있습니다.",
    author: {
      name: "타일러 코빙턴",
      avatar: "/assets/images/avatar/avt-3.webp",
    },
    createdAt: new Date("2025-03-01").getTime(),
  },
  {
    id: 3,
    img: "/assets/images/blog/thumb-4.webp",
    title: "2025년 NFT: 예술, 신원, 그리고 그 이상",
    description:
      "NFT는 2025년 예술을 넘어 게임, 신원 시스템, 소유권 검증 등 다양한 분야에 활용되고 있습니다.",
    author: {
      name: "프레디 카펜터",
      avatar: "/assets/images/avatar/avt-6.webp",
    },
    createdAt: new Date("2025-04-05").getTime(),
  },
  {
    id: 4,
    img: "/assets/images/blog/thumb-2.webp",
    title: "글로벌 금융에서 디파이 2.0의 부상",
    description:
      "디파이 2.0은 더 스마트하고 빠른 블록체인 도구로 대출, 거래, 수익 농사를 간소화하고 있습니다.",
    author: {
      name: "살바도르 달리",
      avatar: "/assets/images/avatar/avt-4.webp",
    },
    createdAt: new Date("2025-03-10").getTime(),
  },
  {
    id: 5,
    img: "/assets/images/blog/thumb-5.webp",
    title: "웹3가 지금 더 중요한 이유",
    description:
      "웹3는 사용자가 통제권을 가지며, 탈중앙화 앱, 신원, 디지털 소유권을 가능하게 합니다.",
    author: {
      name: "타일러 코빙턴",
      avatar: "/assets/images/avatar/avt-8.webp",
    },
    createdAt: new Date("2025-02-20").getTime(),
  },
  {
    id: 6,
    img: "/assets/images/blog/thumb-6-1.webp",
    title: "AI + 블록체인: 강력한 새로운 조합",
    description:
      "AI는 자동화, 보안, 예측 의사결정에서 블록체인의 기능을 향상시킵니다.",
    author: {
      name: "프레디 카펜터",
      avatar: "/assets/images/avatar/avt-6.webp",
    },
    createdAt: new Date("2025-01-15").getTime(),
  },
];
