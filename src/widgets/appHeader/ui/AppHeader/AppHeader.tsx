import { HeaderNavigation } from "@/src/features/navigation";
import { SearchField } from "@/src/features/search";
import { Box, Stack } from "@mui/material";
import { Container } from "@/src/widgets/container";

export const AppHeader = () => {
  return (
    <Box component={"header"} sx={{position: "fixed", zIndex: 2, backdropFilter: "blur(10px)", width: "100%"}}>
      <Container>
        <Stack
          sx={{
            height: "80px",
          }}
          gap={"10px"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HeaderNavigation />
          <Stack gap={"10px"}>
            <SearchField />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
