import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import InitailChatCard from "./InitailChatCard";

const InitialChatBox = ({ handleResponse }) => {
  const initialData = [
    {
      heading: "Hi, what is the weather",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is my location",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is the temperature",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, how are you",
      subtext: "Get immediate AI generated response",
    },
  ];
  return (
    <Stack margin={1}>
      <Stack alignItems={"center"} spacing={2} my={5}>
        <Typography variant="h2" fontSize={"3rem"}>
          How Can I Help You Today?
        </Typography>
        <Box
          component={"img"}
          src={"/AiImg.png"}
          height={{ xs: 40, md: 80 }}
          width={{ xs: 40, md: 80 }}
          boxShadow={4}
          borderRadius={"50%"}
        />
      </Stack>
      <Stack>
        <Grid container>
          {initialData.map((item, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <InitailChatCard item={item} handleResponse={handleResponse} />{" "}
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default InitialChatBox;
