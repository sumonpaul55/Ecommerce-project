import React from "react";
import styled from "styled-components";
const Home = () => {
  return (
    <Wrapper>
      <h1>something</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 100vh;

  h1 {
    color: ${({ theme }) => theme.colors.color};
    text-align: center;
  }
`;
export default Home;
