import { Box, Button, Grid, Input, Stack } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import FeedbackForm from "./FeedbackForm";

const InputChatSubmit = ({ chat, setChat, handleResponse }) => {
  const [input, setInput] = useState("");
  const [openFeedback, setOpenFeedback] = useState(false);
  const inputRef = React.useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);
  return (
    <Box>
      <Box p={".5rem .5rem"}>
        <Box>
          <Grid container>
            <Grid size={{ xs: 8, md: 10 }}>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message Bot AI..."
                disableUnderline
                sx={{
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  p: 1,
                  backgroundColor: "#ffffff",
                }}
                inputRef={inputRef}
              />
            </Grid>
            <Grid size={{ xs: 1, md: 1 }}>
              <Button
                type="submit"
                onClick={() => {
                  if (input != "") {
                    handleResponse(input);
                    setInput("");
                  }
                }}
                sx={{ backgroundColor: "primary.main", color: "black", p: 1.5 }}
              >
                Ask
              </Button>
            </Grid>
            <Grid
              size={{ xs: 1, md: 1 }}
              sx={{ marginLeft: { xs: "2.3rem", md: 0 } }}
            >
              <Button
                type="button"
                sx={{ backgroundColor: "primary.main", color: "black", p: 1.5 }}
                onClick={() => {
                  if (chat.length > 0) setOpenFeedback(true);
                }}
              >
                save
              </Button>{" "}
            </Grid>
          </Grid>
        </Box>
      </Box>{" "}
      <FeedbackForm
        open={openFeedback}
        chat={chat}
        setChat={setChat}
        onClose={() => setOpenFeedback(false)}
      />
    </Box>
  );
};

export default InputChatSubmit;
