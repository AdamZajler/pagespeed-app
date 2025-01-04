"use client";

import { usePathname, useRouter } from "next/navigation";
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import { sideBarMenuItems } from "@/features/dashboard/const/sideBarMenuItems";

export const SideBarMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <MenuList
      sx={{
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        backgroundColor: "#FAFAFA",
      }}
    >
      {sideBarMenuItems.map((menuItem, i) => {
        const isSelected = pathname === menuItem.pathname;

        return (
          <MenuItem
            key={`${menuItem.title}-${i}`}
            selected={isSelected}
            onClick={() => (isSelected ? null : router.push(menuItem.pathname))}
            sx={{
              justifyContent: "space-between",

              "&.Mui-selected": {
                backgroundColor: "unset",
                color: "primary.500",

                svg: {
                  color: "primary.500",
                },
              },
            }}
          >
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <ListItemText>{menuItem.title}</ListItemText>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};
