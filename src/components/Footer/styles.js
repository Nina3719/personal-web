import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet, height } from "styled-system";

export const Wrapper = styled(Flex)`
  position: fixed;
  bottom: 0;
  flex-direction: column;
  padding-bottom: 40px;
  padding-left: 40px;
`;

export const IconWrapper = styled(Flex)`
  flex-direction: row;
  width: 110px;
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  margin-left: 5px;
  text-transform: lowercase;
  font-size: 1.5em;
  letter-spacing: 7px;
  margin-bottom: 5px;

  &:hover {
    font-weight: bolder;
  }
`;
