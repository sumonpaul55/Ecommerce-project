import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper style={{ textAlign: "center" }}>
      <h1>Nothing Found</h1>
      <Link to="/">Go Home</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
`;

export default ErrorPage;
