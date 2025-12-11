import { Typography } from "@mui/material"
import { FC } from "react"

type Props = {
  value: string
}

export const MovieTitle:FC<Props> = ({value}) => {

  return (
    <Typography variant="h3" sx={{fontSize: "2rem",fontWeight:600}}>{value}</Typography>
  )
}