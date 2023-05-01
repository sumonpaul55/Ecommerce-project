import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Nothing Found</h1>
      <Link path="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
