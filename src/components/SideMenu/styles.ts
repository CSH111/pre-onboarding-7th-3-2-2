import styled from "styled-components";

import { margin } from "./../../styles/variables";
import { default as MenuItemComponent } from "./MenuItem";

export const MenuItem = styled(MenuItemComponent)`
  margin: ${margin.s2};
  margin-left: calc(${({ depth }) => depth} * ${margin.s2});
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface AccordionBodyProps {
  isOpen: boolean | undefined;
}

export const AccordionBody = styled.ul<AccordionBodyProps>`
  overflow: hidden;
  transition: max-height 0.3s;
  transition-timing-function: cubic-bezier(
    ${({ isOpen }) => (isOpen ? "0.69, 0.01, 0.9, 0.36" : "0, 1, 0, 1")}
  );
  max-height: ${({ isOpen }) => (isOpen ? "2000px" : "0px")};
`;
