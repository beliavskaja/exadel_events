import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    <Card sx={{ minWidth: 275, backgroundColor: "#d1ecf8" }}>
      <CardContent>
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
          {event.eventName}
        </Typography>
        <Typography variant="h6" color="text.secondary" component="div">
          {event.startDate}
          {bull}
          {event.endDate}
        </Typography>
        <Typography variant="body1">Type: {event.type}</Typography>
        <Typography variant="body1">
          Description: {event.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Register</Button>
      </CardActions>
    </Card>
  );
}
