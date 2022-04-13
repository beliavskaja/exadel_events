import React from "react";
import Header from "../../components/Header/Header";

export default function MyEvents({ logout }) {
  return (
    <>
      <Header logout={logout} />
      <h2>My Events</h2>
    </>
  );
}
