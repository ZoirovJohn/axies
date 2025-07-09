import ItemDetails1 from "@/app/components/block/ItemDetails1";
import LiveAuction from "@/app/components/block/LiveAuction";
import Breadcrumb from "@/app/components/breadcrumb";
import LiveAuctionModal from "@/app/components/modal/LiveAuctionModal";
import { Metadata } from "next";

const item = {
  title: "Item Detail",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Explore",
      path: "/item-details-1",
    },
    {
      name: "Item Detail",
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
      <ItemDetails1 />
      <LiveAuction />

      {/* live auction product modal */}
      <LiveAuctionModal />
    </>
  );
}
