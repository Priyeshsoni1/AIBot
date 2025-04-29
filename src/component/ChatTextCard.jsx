import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const ChatTextCard = ({ item }) => {
  const src = item.type == 1 ? "/AiImg.png" : "/HumanImg.png";
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "5px",
        margin: 2,
        display: "flex",
        gap: 5,
        padding: 2,
        boxShadow: 4,
      }}
    >
      {" "}
      <Box src={src} component={"img"} width={"60px"} height={"60px"} />
      <Stack textAlign={"left"}>
        <Typography component={"span"} fontWeight={"700"}>
          {item.type == 1 ? "Soul Ai" : "You"}
        </Typography>
        <Typography>{item.text}</Typography>
        <Typography
          color="text.secondary"
          fontSize={".8rem"}
          sx={{ marginTop: 1 }}
        >
          {moment(item.time).format("hh:mm a")}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ChatTextCard;
