import { Box } from "@mui/material"
import { FC, PropsWithChildren } from "react"
import { CustomizableMuiComponent } from "@/src/shared/model"

type Props = PropsWithChildren<CustomizableMuiComponent<{
  fullWidth?: boolean;
}>>;

export const Container:FC<Props> = ({
  sx,
  children,
  className,
  fullWidth,
  compoenent = "div"
}) => {
  return (
    <Box
      sx={{
        maxWidth: !fullWidth ? "146rem" : "unset",
        width: "100%",
        px: "1rem",
        margin: "0 auto",
        overflowX:"hidden",
        ...sx
      }}
      component={compoenent}
      className={className}
      >
      {children}
    </Box>
  )
}