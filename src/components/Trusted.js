import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return <Wrapper>Trusted</Wrapper>;
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
`;
export default Trusted;
