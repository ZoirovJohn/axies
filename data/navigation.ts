// hooks/useNavigation.ts
import { useTranslation } from "next-i18next";

export type NavigationType = {
  id: number;
  name: string;
  path: string;
  dropdown?: NavigationType[];
};

export const useNavigation = (authMember: boolean = true): NavigationType[] => {
  const { t } = useTranslation("common");

  if (authMember) {
    return [
      { id: 1, name: t("Home"), path: "/" },
      { id: 2, name: t("Products"), path: "/explore-4" },
      { id: 3, name: t("Live Auctions"), path: "/live-auctions" },
      { id: 4, name: t("Blogs"), path: "/blog" },
      { id: 5, name: t("Creators"), path: "/authors-1" },
      {
        id: 6,
        name: t("More"),
        path: "/",
        dropdown: [
          { id: 1, name: t("Ranking"), path: "/ranking" },
          { id: 2, name: t("My Profile"), path: "/edit-profile" },
          { id: 3, name: t("Create NFT"), path: "/create-item" },
          { id: 4, name: t("Contact"), path: "/contact-1" },
          { id: 5, name: t("FAQ"), path: "/faq" },
        ],
      },
    ];
  }

  return [
    { id: 1, name: t("Home"), path: "/" },
    { id: 2, name: t("Products"), path: "/explore-4" },
    { id: 4, name: t("Blogs"), path: "/blog" },
    { id: 5, name: t("Creators"), path: "/authors-1" },
    {
      id: 6,
      name: t("Register"),
      path: "#",
      dropdown: [
        { id: 1, name: t("Login"), path: "/login" },
        { id: 2, name: t("Sign Up"), path: "/signup" },
      ],
    },
  ];
};
