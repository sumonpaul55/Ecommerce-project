import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return <Wrapper>Trusted</Wrapper>;
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
  }
`;
export default Trusted;
