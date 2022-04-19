import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    -
  </Box>
);

export default function EventCard({ event }) {
  return (
    <Card sx={{ minWidth: 250, minHeight: 300, position: "relative", backgroundColor: "#d1ecf8" }}>
      <Box
        display="flex"
        flexDirection="column"
        padding={2}
        position="absolute"
        top="0"
        bottom="0"
        justifyContent="space-between"
      >
        <Box>
          <Typography sx={{ fontSize: 26 }} color="text.secondary">
            {event.eventName}
          </Typography>
          <Typography variant="h8" color="text.secondary" component="div">
            {dayjs(event.startDate).format("D.MM.YYYY")}
            {bull}
            {dayjs(event.endDate).format("D.MM.YYYY")}
          </Typography>
          <Typography marginTop={2} variant="body2">
            Description: {event.description}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
          <Typography variant="body2" marginTop={2}>Type: {event.eventType}</Typography>
          {!!event.location && (
            <Typography variant="body2" marginTop={0.5}>Location: {event.location}</Typography>
          )}
          <Button sx={{marginTop: 1}} variant="outlined" size="small">Register</Button>
        </Box>
      </Box>
    </Card>
  );
}
