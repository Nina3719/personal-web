import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet, height, color } from "styled-system";

export const Wrapper = styled(Flex)`
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
`;

export const Text = styled.div`
  font-family: ${themeGet("fonts.primary")};
  ${fontSize};
  color: white;
  line-height: 2em;
  letter-spacing: 2px;
  ${space};
  font-weight: bolder;
  text-align: center;
  ${color};
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  margin-left: 5px;
  ${fontSize};
  text-align: center;

  &:hover {
    font-weight: bolder;
    color: rgba(148, 187, 233, 1);
  }
`;

export const ProjectWrapper = styled(Flex)`
  flex-direction: column;
  ${space};
`;

export const CarouselWrapper = styled(Flex)`
  ${space};
  overflow-x: hidden;
`;

export const Clothes = styled.div`
  height: 50px;
`;
