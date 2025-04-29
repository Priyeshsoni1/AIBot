// src/component/Sidebar.jsx
import React from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ chat, setChat, setMenuOpen, menuOpen, isMobile }) => {
  const navigate = useNavigate();
  const SidebarContent = () => (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      {isMobile && (
        <Button
          onClick={() => {
            setMenuOpen(false);
          }}
          sx={{ mb: 0 }}
        >
          Close
        </Button>
      )}
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Stack
          direction={"row"}
          gap={1}
          onClick={() => {
            setChat([]);
            setMenuOpen(false);
          }}
          padding={2}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ backgroundColor: "primary.main", cursor: "pointer" }}
        >
          <Box
            component={"img"}
            src={"sidebarImg.png"}
            height={40}
            width={40}
            borderRadius={2}
            boxShadow={2}
          />
          <Typography
            fontSize={30}
            fontWeight={600}
            color={"black"}
            sx={{
              textTransform: "capitalize",
              fontFamily: "Poppins",
            }}
          >
            New Chat
          </Typography>
          <Box
            component={"img"}
            src={"TextIcon.png"}
            height={24}
            width={24}
            borderRadius={2}
            boxShadow={2}
          />
        </Stack>
      </Link>{" "}
      <Link to={"/history"} style={{ textDecoration: "none" }}>
        <Stack
          onClick={() => {
            setMenuOpen(false);
          }}
          direction={"row"}
          gap={1}
          m={2}
          borderRadius={2}
          padding={2}
          textAlign={"center"}
          justifyContent={"space-between"}
          sx={{ backgroundColor: "primary.main", cursor: "pointer" }}
        >
          <Typography
            fontSize={22}
            fontWeight={600}
            color={"black"}
            textAlign={"center"}
            sx={{
              textTransform: "capitalize",
              fontFamily: "Poppins",
            }}
          >
            Past Conversations
          </Typography>
        </Stack>
      </Link>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        open={menuOpen}
        anchor="left"
        onClose={() => setMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "80%" },
        }}
      >
        <SidebarContent />
      </Drawer>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "background.paper",
        borderRight: "1px solid #ddd",
      }}
    >
      <SidebarContent />
    </Box>
  );
};

export default Sidebar;
