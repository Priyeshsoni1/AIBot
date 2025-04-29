import React from "react";
import Navbar from "../component/Navbar";
import { Box, Stack } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import data from "../../Sample/data.json";
import { EntityType } from "../util/Enum";
import { v4 } from "uuid";
import InitialChatBox from "../component/InitialChatBox";
import ChatTextCard from "../component/ChatTextCard";
import InputChatSubmit from "../component/InputChatSubmit";

const Home = () => {
  const { chat, setChat } = useOutletContext();

  const handleResponse = (input) => {
    const responseObj = data.find(
      (item) => input.toLowerCase() === item.question.toLowerCase()
    );
    let answer = "Sorry, Did not understand your query!";
    if (responseObj) {
      answer = responseObj.response;
    }
    setChat((prev) => [
      ...prev,
      {
        type: EntityType.HUMAN,
        text: input,
        time: new Date(),
        id: v4(),
      },
      {
        type: EntityType.AI,
        text: answer,
        time: new Date(),
        id: v4(),
      },
    ]);
  };

  return (
    <Stack
      sx={{
        height: "100vh",
        backgroundColor: "primary.background",
      }}
    >
      {/* Top Navbar */}
      <Navbar />

      {/* Chat messages area (scrollable) */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 0,
        }}
      >
        {chat.length === 0 && (
          <InitialChatBox handleResponse={handleResponse} />
        )}
        {chat.length > 0 &&
          chat.map((item, index) => {
            return <ChatTextCard key={index} item={item} />;
          })}
      </Box>

      {/* Chat Input fixed at bottom */}
      <Box
        sx={{
          p: 0,
          marginBottom: "1rem",
        }}
      >
        <InputChatSubmit
          chat={chat}
          setChat={setChat}
          handleResponse={handleResponse}
        />
      </Box>
    </Stack>
  );
};

export default Home;
