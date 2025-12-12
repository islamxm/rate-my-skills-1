import { FC } from "react";
import { Person } from "../../model";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { randomRGBA } from "@/src/shared/lib";
import { IMAGES_BASE_URL } from "@/src/shared/api";

type Props = {
  data: Pick<Person, "profile_path" | "name" | "id">;
  size?: number;
};

export const PersonAvatar: FC<Props> = ({ data, size = 45 }) => {
  const { profile_path, name } = data;

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        flex: "0 0 auto",
        backgroundColor: randomRGBA(),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {profile_path ? (
        <Image
          src={`${IMAGES_BASE_URL}/w92${profile_path}`}
          width={50}
          height={50}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <Typography sx={{ textTransform: "capitalize" }} variant="h2">
          {name[0]}
        </Typography>
      )}
    </Box>
  );
};
