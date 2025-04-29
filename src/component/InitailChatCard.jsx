import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const InitailChatCard = ({ item, handleResponse }) => {
  return (
    <Box
      onClick={() => handleResponse(item.heading)}
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "4px",
        margin: ".5rem 1rem",
        padding: 2,
        boxShadow: 2,
        cursor: "pointer",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100%",
        }}
        spacing={1}
      >
        <Typography fontWeight={700} fontSize={"1rem"}>
          {item.heading}
        </Typography>
        <Typography component={"p"}>{item.subtext}</Typography>
      </Stack>
    </Box>
  );
};

export default InitailChatCard;
