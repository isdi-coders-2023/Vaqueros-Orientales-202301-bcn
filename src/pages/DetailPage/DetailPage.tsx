import React from "react";
import { useParams } from "react-router";

const DetailPage = () => {
  const { id } = useParams();
  return (
    <header>
      <h1>EventInfo</h1>
      <span>{id}</span>
    </header>
  );
};

export default DetailPage;
