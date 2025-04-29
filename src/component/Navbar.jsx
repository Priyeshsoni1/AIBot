import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContex";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useOutletContext } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const { mode, toggleTheme } = useContext(ThemeContext);
  const { setMenuOpen } = useOutletContext();
  console.log("isMobile", isMobile, mode, setMenuOpen);
  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <Stack alignItems={"center"} direction={"row"} spacing={1}>
        {isMobile && <MenuIcon onClick={() => setMenuOpen((prev) => !prev)} />}{" "}
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography
            variant="h1"
            component={"h1"}
            fontSize={"2rem"}
            fontWeight={600}
            color={"primary.title"}
          >
            Bot AI
          </Typography>
        </Link>
      </Stack>
      {/* <Stack direction={"row"} spacing={0.2} alignItems={"center"}>
        <Typography textTransform={"capitalize"} fontSize={10}>
          {mode == false ? "dark" : "light"} mode
        </Typography>
        <IconButton onClick={() => toggleTheme()}>
          {mode ? (
            <LightModeIcon sx={{ backgroundColor: "primary.main" }} />
          ) : (
            <DarkModeIcon />
          )}
        </IconButton>
      </Stack> */}
    </Box>
  );
};

export default Navbar;
