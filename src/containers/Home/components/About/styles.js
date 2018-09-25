import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet, height } from "styled-system";

export const Wrapper = styled(Flex)`
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

export const TextWrapper = styled(Flex)`
  margin-top: 30vh;
  flex-direction: column;
`;

export const Text = styled.div`
  font-family: ${themeGet("fonts.primary")};
  ${fontSize};
  color: white;
  line-height: 2em;
  letter-spacing: 2px;
  ${space};
  font-weight: bolder;
`;

export const SmallText = styled.span`
  font-weight: 100;
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  margin-left: 5px;

  &:hover {
    font-weight: bolder;
  }
`;
