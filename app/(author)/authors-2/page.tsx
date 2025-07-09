import AuthorProfile from "@/app/components/block/AuthorProfile";
import Breadcrumb from "@/app/components/breadcrumb";
import LiveAuctionModal from "@/app/components/modal/LiveAuctionModal";

const item = {
  title: "Authors",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Page",
      path: "/authors-2",
    },
    {
      name: "Authors",
    },
  ],
};

export default function Page(): JSX.Element {
  return (
    <>
      <Breadcrumb data={item} />
      <AuthorProfile page={1} limit={50} search={{ followingId: "" }} />

      {/* live auction product modal */}
      <LiveAuctionModal />
    </>
  );
}
