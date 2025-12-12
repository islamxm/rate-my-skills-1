import { alpha, Chip, hexToRgb } from "@mui/material"
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
        color: theme.palette.common.white,
        backgroundColor: alpha(theme.palette.grey[400], .1),
        borderColor: theme.palette.text.disabled,
        backdropFilter: "blur(1.5rem)",
        fontWeight: 600,
        borderRadius: "1rem",
        fontSize: "1.2rem"
      })}
      variant={"outlined"}
      label={value}
      // size={"small"}
      />
  )
}