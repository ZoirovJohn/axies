import { Metadata } from "next";
import CreateSellNft from "../components/block/CreateSellNft";
import PopularCollection from "../components/block/PopularCollection";
import TopSeller from "../components/block/TopSeller";
import Hero1 from "../components/hero/Hero1";
import LiveAuctionModal from "../components/modal/LiveAuctionModal";
import TodaysPicks from "../components/block/TodaysPicks";
import TopSeller2 from "../components/block/TopSeller2";

export const metadata: Metadata = {
  title: "Axies | NFT Marketplace React/Next Js Template | Home 1",
};

export default function page(): JSX.Element {
  return (
    <>
      <Hero1 />
      <PopularCollection />
      <TodaysPicks style="pad-b-54 no-pt-mb" />
      {/* <TopSeller />*/}
      <TopSeller2 />

      <CreateSellNft />

      {/* live auction product modal */}
      <LiveAuctionModal />
    </>
  );
}
