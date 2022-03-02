import { Button } from '@mui/material';
import React from 'react';
import { Header } from './MyEvents.styled';
import { Link } from "react-router-dom";

export default function MyEvents ({ logout, user }) {
    return (
      <>
      <Header>
        <nav
          style={{
            marginRight: "1rem"
          }}
        >
          <Link to="/events">Events</Link> |{" "}
          <Link to="/myevents">My Events</Link>
        </nav>
        <Button size='small' variant="contained" onClick={() => logout()}>
          logout
        </Button>
      </Header>
      <h2>My Events</h2>
      </>
    );
  };