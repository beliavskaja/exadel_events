import { Button, Grid, Box } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Header } from "./Events.styled";
import { Link } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import getEvents from "../../services/api/axios/getEvents.api";
import Pagination from "../../components/Pagination/Pagination";
import NewEventModal from "../../components/NewEventModal/NewEventModal";

export default function Events({ logout, user }) {
  const [events, setEvents] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchEvents = (skip = 0, limit = 2) => {
    getEvents(skip, limit).then((data) => {
      setEvents(data.events);
      setTotal(data.total);
    });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <Header>
        <nav
          style={{
            marginRight: "1rem",
          }}
        >
          <Link to="/events">Events</Link> |{" "}
          <Link to="/myevents">My Events</Link>
        </nav>
        <Button size="small" variant="contained" onClick={() => logout()}>
          logout
        </Button>
      </Header>
      <Box margin={5}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h2>All Events</h2>
          {(user.roles || []).includes("ROLE_ADMIN") && <NewEventModal />}
        </Box>
        <Grid container spacing={3} marginTop={1}>
          {events.map((event) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              key={event.eventName}
            >
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
        <Pagination total={total} fetchEvents={fetchEvents} />
      </Box>
    </>
  );
}
