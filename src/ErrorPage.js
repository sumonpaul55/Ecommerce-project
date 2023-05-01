import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Nothing Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
