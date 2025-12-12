import { Spinner } from "@/src/shared/ui";
import { Stack } from "@mui/material";
import { forwardRef } from "react";

export const LoadMoreTrigger = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Stack p={".5rem 0"} alignItems={"center"} component={"div"} ref={ref}>
      <Spinner />
    </Stack>
  );
});
