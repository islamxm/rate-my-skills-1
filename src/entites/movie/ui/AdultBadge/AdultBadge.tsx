import { Chip } from "@mui/material"
import { FC } from "react"

export const AdultBadge:FC = () => {
  return (
    <Chip
      label={"+18"}
      color={"error"}
      />
  )
}