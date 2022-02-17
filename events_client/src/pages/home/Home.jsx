import { Button } from '@mui/material';
import React from 'react';
import { Header } from './Home.styled';

export default function Home ({ logout, user }) {
    return (
      <Header>
        <h2>Home Page</h2>
        <Button variant="contained" onClick={() => logout()}>
          logout
        </Button>
      </Header>
    );
  };