"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import withAdminLayout from "../components/layout/AdminLayout";
import { NextPage } from "next";

const AdminPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/users");
  }, [router]);

  return null;
};

export default withAdminLayout(AdminPage);
