import { Metadata } from "next";
import Breadcrumb from "../components/breadcrumb";
import EditProfile from "../components/block/EditProfile";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/store";

const item = {
  breadcrumb: [
    {
      name: "Page",
      path: "/create-item",
      title: "Create Item",
    },
    {
      name: "Author",
      path: "/edit-profile",
      title: "Profile",
    },
    {
      name: "Profile",
    },
  ],
  profile: [{}],
};

export const metadata: Metadata = {
  title: "Axies | NFT Marketplace",
};

export default function page(): JSX.Element {
  return (
    <>
      <Breadcrumb data={item} />

      <EditProfile />
    </>
  );
}
