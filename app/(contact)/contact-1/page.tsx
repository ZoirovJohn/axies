import Contact from "@/app/components/block/Contact";
import Breadcrumb from "@/app/components/breadcrumb";
import { Metadata } from "next";

const item = {
  title: "Contact 1",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact-1",
    },
    {
      name: "Contact",
    },
  ],
};

export const metadata: Metadata = {
  title: "Axies | NFT Marketplace",
};

export default function Page(): JSX.Element {
  return (
    <>
      <Breadcrumb data={item} />
      <Contact />
    </>
  );
}
