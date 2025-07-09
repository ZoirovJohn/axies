import LiveAuction3 from "@/app/components/block/LiveAuction3";
import NftInfo from "@/app/components/block/NftInfo";
import PopularCollection3 from "@/app/components/block/PopularCollection3";
import TopSeller3 from "@/app/components/block/TopSeller3";
import LiveAuctionModal from "@/app/components/modal/LiveAuctionModal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Axies | NFT Marketplace",
};

export default function Page(): JSX.Element {
    return (
        <>
            <NftInfo style="home-3" />
            <LiveAuction3 />
            <TopSeller3 />
            <PopularCollection3 />

            {/* live auction product modal */}
            <LiveAuctionModal />
        </>
    );
}
