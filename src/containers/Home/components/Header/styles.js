import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet, height } from "styled-system";

export const Wrapper = styled(Flex)`
  height: 100vh;
  font-family: ${themeGet("fonts.primary")};
  ${fontSize};
  width: 100vw;
  justify-content: center;
  margin-top: 45vh;
  color: white;
`;
