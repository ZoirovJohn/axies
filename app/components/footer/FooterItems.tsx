import Link from "next/link";
import { useNavigation } from "@/data/navigation";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/store";
import { useTranslation } from "next-i18next";

interface MenuItem {
  href: string;
  label: string;
}

interface Props {
  data: { id: number; avatar: string; name: string; eth: number };
}

const menuItemsA: MenuItem[][] = [
  [
    { href: "/", label: "Home" },
    { href: "/explore-4", label: "Products" },
    { href: "/live-auctions", label: "Live Auctions" },
  ],
  [
    { href: "/edit-profile", label: "My Profile" },
    { href: "/create-item", label: "Create NFT" },
    { href: "/authors-1", label: "Creators" },
  ],
  [
    { href: "/ranking", label: "Ranking" },
    { href: "/contact-1", label: "Contact" },
    { href: "/blog", label: "Blogs" },
    { href: "/faq", label: "FAQ" },
  ],
];

const menuItemsB: MenuItem[][] = [
  [
    { href: "/", label: "Home" },
    { href: "/login", label: "Login" },
    { href: "/signup", label: "Sign Up" },
  ],
  [
    { href: "/authors-1", label: "Creators" },
    { href: "/explore-4", label: "Products" },
  ],
  [{ href: "/blog", label: "Our Blog" }],
];

export default function FooterItems({ data }: Props) {
  const { t } = useTranslation("common");
  const user = useReactiveVar(userVar);
  const menuItems = user?.memberNick ? menuItemsA : menuItemsB;

  return (
    <>
      {menuItems.map((menu, index) => (
        <div
          className={`col-lg-2 col-md-4 col-sm-${index === 1 ? 7 : 5} col-5`}
          key={index}
        >
          <div className={`widget widget-menu style-${index + 1}`}>
            <h5 className="title-widget">
              {index === 0
                ? t("FooterInfo")
                : index === 1
                ? t("FooterMyAccount")
                : t("FooterCompany")}
            </h5>
            <ul>
              {menu.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{t(label)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
