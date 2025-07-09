import CreateSellNft from "@/app/components/block/CreateSellNft";
import LiveAuction5 from "@/app/components/block/LiveAuction5";
import PopularCollection from "@/app/components/block/PopularCollection";
import TodaysPicks4 from "@/app/components/block/TodaysPicks4";
import TopSeller2 from "@/app/components/block/TopSeller2";
import LiveAuctionModal from "@/app/components/modal/LiveAuctionModal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Axies | NFT Marketplace",
};

export default function Page() {
    return (
        <>
            <LiveAuction5 />
            <TopSeller2 />
            <TodaysPicks4 />
            <PopularCollection />
            <CreateSellNft />

            {/* live auction product modal */}
            <LiveAuctionModal />
        </>
    );
}
