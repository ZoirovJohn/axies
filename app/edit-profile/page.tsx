import { Metadata } from "next";
import Breadcrumb from "../components/breadcrumb";
import EditProfile from "../components/block/EditProfile";

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
  profile:[
    {
      
    }
  ]
};

export const metadata: Metadata = {
  title: "Axies | NFT Marketplace React/Next Js Template | Edit Profile",
};

export default function page(): JSX.Element {
  return (
    <>
      <Breadcrumb data={item} />

      <EditProfile />
    </>
  );
}
