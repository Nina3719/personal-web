import React, { Component } from "react";

import { Wrapper, Text, TextWrapper, Link, SmallText } from "./styles";

class About extends Component {
  render() {
    return (
      <Wrapper>
        <TextWrapper>
          <Text fontSize={["1em", "1.5em", "1.5em"]}>
            from : <SmallText>brooklyn, ny</SmallText>
          </Text>
          <Text fontSize={["1em", "1.5em", "1.5em"]}>
            currently :{" "}
            <SmallText>student at harvard university (2021)</SmallText>
          </Text>
          <Text fontSize={["1em", "1.5em", "1.5em"]}>
            concentration : <SmallText>statistics</SmallText>
          </Text>
          <Text fontSize={["1em", "1.5em", "1.5em"]}>
            secondary : <SmallText>computer science</SmallText>
          </Text>
          <Text fontSize={["1em", "1em", "1em"]} mt="30px">
            affiliations :
            <SmallText>
              <span>
                <Link href="https://www.dev.hsa.net" target="_blank">
                  HSA Dev
                </Link>
              </span>{" "}
              |
              <span>
                <Link href="http://hackharvard.io" target="_blank">
                  HackHarvard
                </Link>
              </span>{" "}
              |
              <span>
                <Link href="https://hauscr.org" target="_blank">
                  HAUSCR
                </Link>
              </span>{" "}
              |
              <span>
                <Link href="https://candlefund.org/" target="_blank">
                  Candle Fund
                </Link>
              </span>{" "}
              |
              <span>
                <Link href="https://www.sciolyharvard.org" target="_blank">
                  SciOly
                </Link>
              </span>
            </SmallText>
          </Text>
        </TextWrapper>
      </Wrapper>
    );
  }
}

export default About;
