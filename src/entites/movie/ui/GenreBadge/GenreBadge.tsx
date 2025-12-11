import { Chip } from "@mui/material"
import { FC } from "react"

type Props = {
  value: string
}

export const GenreBadge:FC<Props> = ({
  value
}) => {
  return (
    <Chip
      sx={theme => ({
        color: theme.palette.common.black,
        backgroundColor: theme.palette.text.disabled,
        borderColor: theme.palette.text.disabled,
        backdropFilter: "blur(10px)",
        fontWeight: 700,
        borderRadius: "1rem",
        fontSize: "1.2rem"
      })}
      variant={"filled"}
      label={value}
      size={"small"}
      />
  )
}