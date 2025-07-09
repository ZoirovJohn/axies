import { Metadata } from "next";
import Breadcrumb from "../components/breadcrumb";
import CreateItem from "../components/block/CreateItem";
import LiveAuctionModal from "../components/modal/LiveAuctionModal";

const item = {
  title: "Create Item",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Page",
      path: "/create-item",
    },
    {
      name: "Currently impossible to create a NFT",
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
      <CreateItem />

      {/* live auction product modal */}
      <LiveAuctionModal />
    </>
  );
}
