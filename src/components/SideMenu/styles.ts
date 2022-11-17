import styled from "styled-components";

import { bgColor, padding } from "./../../styles/variables";
import { default as MenuItemComponent } from "./MenuItem";

export const MenuItem = styled(MenuItemComponent)`
  > div {
    display: flex;
    height: 50px;
    align-items: center;
    &:hover {
      background-color: ${bgColor.skyBlue};
    }
    > a {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
  .accordionHeader,
  > div > a {
    padding: ${padding.s3};
    padding-left: calc(${({ depth }) => depth} * ${padding.s3});
  }
`;

export const MenuItemBox = styled.div<{ active: boolean }>`
  transition: all 0.2s;
  background-color: ${({ active }) => (active ? bgColor.skyBlue : "auto")};
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
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
