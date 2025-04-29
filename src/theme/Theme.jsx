import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D7C7F4",
      title: "#9785BA",
      background: "#F1EAF1FF",
    },
    text: {
      primary: "#000000",
      secondary: "rgba(0,0,0,0.5)",
    },
    background: {
      default: "#FAF7FF",
      paper: "#ffffff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#AF9FCD",
      light: "#D7C7F4",
      dark: "#8C7CA5",
      bglight: "#1e1e1e", // dark bg
      bgtheme: "#121212", // darker bg
      bg: "#8C7CA5", // primary bg
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});
