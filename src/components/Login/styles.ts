import styled from "styled-components";

import { bgColor } from "./../../styles/variables";

export const Form = styled.form`
  background-color: ${bgColor.white};
  display: flex;
  flex-direction: column;
  min-width: 400px;
  min-height: 400px;
  padding: 20px;
  > * {
    height: 40px;
    display: flex;
    align-items: center;
  }
  > input {
    margin-bottom: 20px;
  }
  > button {
    justify-content: center;
  }
`;
