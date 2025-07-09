"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import withAdminLayout from "../components/layout/AdminLayout";

const AdminPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/users");
  }, [router]);

  return null;
};

export default withAdminLayout(AdminPage);
