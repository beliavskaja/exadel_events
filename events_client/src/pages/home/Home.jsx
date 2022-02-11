import React from 'react';
// import { } from './Home.styled';

export default function Home ({ logout, user }) {
    return (
      <div>
        <h2>Hello</h2>
        <div className="logout_button" onClick={() => logout()}>
          logout
        </div>
      </div>
    );
  };