import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  Rating,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";

const FeedbackForm = ({ chat, setChat, open, onClose }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chat.length === 0) {
      enqueueSnackbar("No chat to save", {
        variant: "error",
        autoHideDuration: 2000,
      });
      setFeedback("");
      setRating(0);
      onClose();
      return;
    }
    const oldChats = JSON.parse(localStorage.getItem("chat") || "[]");
    console.log("oldChats", oldChats, chat);
    const newChat = [
      ...oldChats,
      { chat: chat, datetime: new Date(), rating, feedback },
    ];
    localStorage.setItem("chat", JSON.stringify(newChat));
    setChat([]);
    setFeedback("");
    setRating(0);
    onClose();
    enqueueSnackbar("Chat saved successfully", {
      variant: "success",
      autoHideDuration: 2000,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      component="form"
      onSubmit={handleSubmit}
      fullWidth
      PaperProps={{
        sx: {
          width: { xs: "90%", sm: "70%", md: "40%" },
          borderRadius: 3,
          boxShadow: 3,

          margin: "auto .4rem", // center horizontally
          p: 3,
        },
      }}
    >
      <Stack spacing={3} sx={{ width: "100%" }}>
        <Typography
          variant="h5"
          align="center"
          fontFamily={"Open Sans"}
          fontWeight={600}
        >
          Provide Additional Feedback
        </Typography>

        <TextField
          label="Your Feedback"
          multiline
          minRows={4}
          rows={4}
          variant="outlined"
          fullWidth
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <Box textAlign="center">
          <Typography gutterBottom>Rate us:</Typography>
          <Rating
            name="feedback-rating"
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
            size="large"
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!feedback || rating === 0}
        >
          Submit
        </Button>
      </Stack>
    </Dialog>
  );
};

export default FeedbackForm;
