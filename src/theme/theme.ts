import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6F3C",
    },
    secondary: {
      main: "#5D3A8A",
    },
    background: {
      paper: "#FFFFFF",
      default: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
    error: {
      main: "#E53935",
      light: "#FFCDD2",
    },
    success: {
      main: "#43A047",
      light: "#C8E6C9",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "90px",
      lineHeight: "96px",
      letterSpacing: "-1.5px",
    },
    h2: {
      fontWeight: 700,
      fontSize: "56px",
      lineHeight: "64px",
      letterSpacing: "-0.5px",
    },
    h3: {
      fontWeight: 700,
      fontSize: "44px",
      lineHeight: "56px",
    },
    h4: {
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "0.25px",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "24px",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "16px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "20px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "0.25px",
    },
    button: {
      fontWeight: 600,
      fontSize: "16px",
      letterSpacing: "0.5px",
      textTransform: "none",
    },
    caption: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
  breakpoints: {
    values: {
      xs: 350,
      sm: 600,
      md: 825,
      lg: 1280,
      xl: 1440,
    },
  },
});
