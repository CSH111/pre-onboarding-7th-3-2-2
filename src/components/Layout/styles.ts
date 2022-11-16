import styled from "styled-components";

import { bgColor, color } from "../../styles/variables";
export const Container = styled.div`
  min-height: 100vh;
  display: flex;

  > :nth-child(1) {
    color: ${color.white};
    background-color: ${bgColor.darkNavy};
    flex-basis: 20%;
  }
  > :nth-child(2) {
    flex-basis: 80%;
  }
`;
