import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet, height } from "styled-system";

export const NavBarWrapper = styled(Flex)`
  font-family: ${themeGet("fonts.primary")};
  flex-direction: row;
  justify-content: space-between;
  ${fontSize};
  padding-top: 10px;
  position: fixed;
  top: 0;
  ${width};
  ${space};
`;

export const Wrapper = styled(Flex)`
  flex-direction: row;
  height: 50px;
  ${space};
  width: 100vw;
`;

export const Links = styled.a`
  text-decoration: none;
  color: ${props => (props.current ? "#9370DB" : "white")};
  margin-right: 50px;
  margin-top: 13px;
`;
