"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import WithAdminLayout from "../components/layout/AdminLayout";

const AdminPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/users");
  }, [router]);

  return null;
};

export default WithAdminLayout(AdminPage);
