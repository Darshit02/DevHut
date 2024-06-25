import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";
import React from "react";
import { redirect } from "next/navigation";
import DashboardPage from "./DashboardPage";

type Props = {};

const Dashboard = async (props: Props) => {
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect("/sign-in");
  } else {
    return <DashboardPage />;
  }
};

export default Dashboard;
