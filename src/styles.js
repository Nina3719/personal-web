import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet, height } from "styled-system";

export const Wrapper = styled(Flex)`
  margin: -8px;
  padding-bottom: 50px;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;
