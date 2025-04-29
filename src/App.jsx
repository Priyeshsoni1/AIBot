import { Grid, ThemeProvider, useMediaQuery } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme/Theme";
import { ThemeContext } from "./theme/ThemeContex";
import Sidebar from "./component/Sidebar";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [chat, setChat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:800px)");
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <ThemeContext.Provider value={{ mode: isDarkMode, toggleTheme }}>
      <SnackbarProvider>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <Grid container>
            <Grid size={{ xs: 12, md: 2.5 }} sx={{ backgroundColor: "red" }}>
              <Sidebar
                chat={chat}
                setChat={setChat}
                setMenuOpen={setMenuOpen}
                menuOpen={menuOpen}
                isMobile={isMobile}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 9.5 }}>
              {" "}
              <Outlet
                context={{
                  chat,
                  setChat,
                  setMenuOpen,
                }}
              />
            </Grid>
          </Grid>
        </ThemeProvider>
      </SnackbarProvider>
    </ThemeContext.Provider>
  );
};
