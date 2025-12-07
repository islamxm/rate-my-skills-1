"use client"
import { Stack, Link as MuiLink } from "@mui/material"
import Link from "next/link"

const data = ["Home", "Movies", "Series", "Trending", "About"]


export const HeaderNavigation = () => {

  return (
    <Stack direction={"row"} gap={"30px"}>
      {
        data.map(l => (
          <MuiLink sx={theme => ({
            color: theme.palette.text.secondary,
            fontWeight: 600,
            "&:hover": {
              color: theme.palette.text.primary
            }
          })} key={l} component={Link} href={'#'}>{l}</MuiLink>
        ))
      }
    </Stack>
  )
}