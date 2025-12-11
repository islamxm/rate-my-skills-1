import { createTheme } from "@mui/material";
import { AppRouterCacheProviderProps } from "@mui/material-nextjs/v16-appRouter";

export const styleConfig = createTheme({
  typography: {
    fontFamily: `var(--font-plus-jakarta)`,
    h1: {
      fontWeight: 700,
      fontSize: "3.2rem"
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.4rem"
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.6rem"
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.4rem"
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.6rem",
      lineHeight: "160%",
    },
    body2: {
      fontSize: "1.4rem",
      lineHeight: "160%",
    },
  },
  shape: {
    borderRadius: "2rem"
  },
  palette: {
    text: {
      primary: "#ffffff",
      secondary: "#a6a5a8",
      disabled: "#a6a5a8",
    },
    common: {
      white: "#ffffff",
      black: "#1a1a1a",
    },
    primary: {
      main: "#4F46E5",
      dark: "#3832a3ff",
      light: "#655dffff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#1a1a1a",
    },
    background: {
      default: "#1a1a1a",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "1.6rem",
          fontSize: "1.6rem",
          padding: "1.6rem 2.4rem",
          lineHeight: "100%",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: "none",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
          textTransform: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#4F46E5",
          textDecoration: "none",
          transition: "all .2s ease"
        },
      },
    },
  },
});

export const cahceProviderOptions: AppRouterCacheProviderProps["options"] = {
  enableCssLayer: true,
};
