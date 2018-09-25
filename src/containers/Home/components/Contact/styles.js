import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet, height } from "styled-system";

export const Wrapper = styled(Flex)`
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

export const Link = styled.a`
  margin-top: 50vh;
  text-decoration: none;
  cursor: pointer;
  color: white;
  margin-left: 5px;
  text-transform: lowercase;
  font-size: 3em;
  letter-spacing: 7px;
  margin-bottom: 5px;

  &:hover {
    font-weight: bolder;
  }
`;
