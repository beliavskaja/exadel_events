import { Grid, Box } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import getEvents from "../../services/api/axios/getEvents.api";
import Pagination from "../../components/Pagination/Pagination";
import NewEventModal from "../../components/NewEventModal/NewEventModal";
import Header from "../../components/Header/Header";

export default function Events({ logout, user }) {
  const [events, setEvents] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchEvents = (skip = 0, limit = 10) => {
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
      <Header logout={logout}/>
      <Box marginLeft="10%" marginRight="10%" marginTop="74px" padding={1}>
        <Box
          paddingLeft={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <h2>All Events</h2>
          {(user.roles || []).includes("ROLE_ADMIN") && <NewEventModal />}
        </Box>
        <Grid container spacing={3}>
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
