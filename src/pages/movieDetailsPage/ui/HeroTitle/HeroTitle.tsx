import { Link, Typography } from "@mui/material";
import { FC } from "react";
import { RxExternalLink } from "react-icons/rx";
import { motion } from "motion/react";

type Props = {
  title?: string;
  link?: string;
};

export const HeroTitle: FC<Props> = ({ title, link }) => {
  return (
    <Typography
      component={motion.h1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{ fontSize: "5rem" }}
      variant="h1"
    >
      {title}
      {link && (
        <Link
          sx={{ verticalAlign: "top" }}
          variant={"body1"}
          href={link}
          target={"_blank"}
        >
          <RxExternalLink />
        </Link>
      )}
    </Typography>
  );
};
