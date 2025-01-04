import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import type { ReactNode } from "react";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import { DASHBOARD_PAGE_URL, DASHBOARD_RESULTS_PAGE_URL } from "@/features/dashboard/router";

export const sideBarMenuItems: { title: string; pathname: string; icon: ReactNode }[] = [
  { title: "Dashboard", pathname: DASHBOARD_PAGE_URL, icon: <HomeRoundedIcon /> },
  { title: "Śledzone adresy", pathname: DASHBOARD_RESULTS_PAGE_URL, icon: <BarChartRoundedIcon /> },
];
