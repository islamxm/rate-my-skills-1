import { HeaderNavigation } from "@/src/features/navigation"
import { SearchField } from "@/src/features/search"
import { Stack } from "@mui/material"

export const AppHeader = () => {
  return (
    <header>
      <Stack sx={{minHeight: "80px", p: "1.6rem 3rem"}} gap={"10px"} direction={"row"} alignItems={"center"}>
        <HeaderNavigation/>
        <Stack gap={"10px"}>
          <SearchField/>
        </Stack>
      </Stack>
    </header>
  )
}