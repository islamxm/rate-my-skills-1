"use client";
import { Stack } from "@mui/material";
import { routes } from "@/src/shared/routes";
import { NavLink } from "../NavLink/NavLink";
import { usePathname } from "next/navigation";

export const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <Stack direction={"row"} gap={"30px"}>
      {routes.map((route) => (
        <NavLink
          {...route}
          isActive={pathname.startsWith(route.path)}
          key={route.id}
        />
      ))}
    </Stack>
  );
};
