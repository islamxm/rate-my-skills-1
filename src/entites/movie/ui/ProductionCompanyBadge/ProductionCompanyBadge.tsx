"use client";
import { FC } from "react";
import { ProductionCompany } from "../../model";
import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import { IMAGES_BASE_URL } from "@/src/shared/api";

type Props = ProductionCompany;

export const ProductionCompanyBadge: FC<Props> = ({ id, name, logo_path }) => {

  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        backgroundColor: theme.palette.common.white,
        width: "10rem",
        height: "5rem",
        p: "1rem",
        flex: "0 0 auto",
      })}
    >
      {logo_path ? (
        <Image
          alt={name}
          width={150}
          height={80}
          src={`${IMAGES_BASE_URL}/w45${logo_path}` || ""}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      ) : (
        <Typography
          textAlign={"center"}
          variant="body1"
          sx={(theme) => ({
            color: theme.palette.common.black,
            fontSize: "1rem",
          })}
        >
          {name}
        </Typography>
      )}
    </Paper>
  );
};
