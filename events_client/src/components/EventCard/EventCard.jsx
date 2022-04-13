import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
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
    <Card sx={{ minWidth: 250, backgroundColor: "#d1ecf8" }}>
      <CardContent>
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
          {event.eventName}
        </Typography>
        <Typography variant="h6" color="text.secondary" component="div">
          {dayjs(event.startDate).format("D.MM.YYYY")}
          {bull}
          {dayjs(event.endDate).format("D.MM.YYYY")}
        </Typography>
        <Typography>Type: {event.eventType}</Typography>
        <Typography variant="body2">
          Description: {event.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Register</Button>
      </CardActions>
    </Card>
  );
}
