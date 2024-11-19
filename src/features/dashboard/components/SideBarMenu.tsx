"use client";

import { usePathname, useRouter } from "next/navigation";
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import { sideBarMenuItems } from "@/features/dashboard/const/sideBarMenuItems";
import ContentCut from "@mui/icons-material/ContentCut";

export const SideBarMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <MenuList sx={{ maxWidth: 230, width: "100%" }}>
      {sideBarMenuItems.map((menuItem, i) => {
        const isSelected = pathname === menuItem.pathname;

        return (
          <MenuItem
            key={`${menuItem.title}-${i}`}
            selected={isSelected}
            onClick={() => (isSelected ? null : router.push(menuItem.pathname))}
          >
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>{menuItem.title}</ListItemText>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};
