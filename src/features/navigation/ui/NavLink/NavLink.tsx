import { Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { Route } from "@/src/shared/routes";
import { FC } from "react";

type Props = Route & {
  isActive: boolean;
};

export const NavLink: FC<Props> = ({ isActive, label, path }) => {
  return (
    <MuiLink
      sx={(theme) => ({
        color: theme.palette.text[isActive ? "primary" : "secondary"],
        fontWeight: 600,
        "&:hover": {
          color: theme.palette.text.primary,
        },
      })}
      component={Link}
      href={path}
    >
      {label}
    </MuiLink>
  );
};
