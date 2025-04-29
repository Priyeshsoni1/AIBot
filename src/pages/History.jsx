import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import {
  Autocomplete,
  Box,
  Menu,
  MenuItem,
  Rating,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
  const [filterChatHistory, setFilterChatHistory] = React.useState([]);
  const fetchChatHistory = () => {
    // Simulate fetching chat history from a server or local storage
    const storedChat = JSON.parse(localStorage.getItem("chat")) || [];
    setChatHistory(storedChat);
    setFilterChatHistory(storedChat);
  };
  useEffect(() => {
    fetchChatHistory();
  }, []);
  const handleFilter = (e) => {
    const filterValue = e.target.innerText;
    const filteredHistory = chatHistory.filter(
      (chat) => chat.rating == filterValue
    );
    setFilterChatHistory(filteredHistory);
  };

  return (
    <Stack
      sx={{
        height: "100vh",
        backgroundColor: "primary.background",
      }}
    >
      {" "}
      <Navbar />
      <Typography
        variant="h2"
        sx={{ p: 2, fontSize: "2rem", fontWeight: "bold" }}
      >
        Conversation History
      </Typography>
      <Autocomplete
        disablePortal
        onChange={(e) => handleFilter(e)}
        options={[1, 2, 3, 4, 5]}
        sx={{ width: 300, m: "1rem 2rem" }}
        renderInput={(params) => (
          <TextField {...params} label="Filter By Rating" />
        )}
      />{" "}
      {filterChatHistory.length == 0 && (
        <Typography
          textAlign={"center"}
          p={3}
          m={4}
          borderRadius={2}
          sx={{ backgroundColor: "#ffffff" }}
        >
          No saved chats.
        </Typography>
      )}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 0,
        }}
      >
        {filterChatHistory.length > 0 &&
          filterChatHistory.map((chat, index) => (
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
