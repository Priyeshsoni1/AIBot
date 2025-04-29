import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import { Box, Rating, Stack, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import data from "../../Sample/data.json";
import { EntityType } from "../util/Enum";
import { v4 } from "uuid";
import InitialChatBox from "../component/InitialChatBox";
import ChatTextCard from "../component/ChatTextCard";
import InputChatSubmit from "../component/InputChatSubmit";
import moment from "moment";

const History = () => {
  const [chatHistory, setChatHistory] = React.useState([]);
  const fetchChatHistory = () => {
    // Simulate fetching chat history from a server or local storage
    const storedChat = JSON.parse(localStorage.getItem("chat")) || [];
    setChatHistory(storedChat);
  };
  useEffect(() => {
    fetchChatHistory();
  }, []);

  return (
    <Stack
      sx={{
        height: "100vh",
        backgroundColor: "primary.background",
      }}
    >
      <Typography variant="h4" sx={{ p: 2, fontWeight: "bold" }}>
        Conversation History
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 0,
        }}
      >
        {chatHistory.length > 0 &&
          chatHistory.map((chat, index) => (
            <Box key={index} sx={{ p: 2, borderBottom: "1px solid #ccc" }}>
              <Stack direction="column" sx={{ m: 2 }} textAlign={"left"}>
                <Typography>
                  {moment(chat.datetime).format("DD/MM/YYYY hh:mm A")}
                </Typography>
              </Stack>
              {chat.chat.map((item, idx) => (
                <ChatTextCard key={idx} item={item} />
              ))}
              <Stack direction="column" sx={{ m: 2 }} textAlign={"left"}>
                <Typography>Feeback : {chat.feedback}</Typography>

                <Rating
                  name="read-only"
                  value={chat.rating}
                  readOnly
                  precision={0.5}
                />
              </Stack>
            </Box>
          ))}
      </Box>
    </Stack>
  );
};

export default History;
