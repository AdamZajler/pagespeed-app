import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import type { ReactNode } from "react";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";

export const sideBarMenuItems: { title: string; pathname: string; icon: ReactNode }[] = [
  { title: "Dashboard", pathname: "/dashboard", icon: <HomeRoundedIcon /> },
  { title: "Śledzone adresy", pathname: "/dashboard/results", icon: <BarChartRoundedIcon /> },
];
