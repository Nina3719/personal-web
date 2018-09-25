import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {
  Wrapper,
  Text,
  Link,
  Wrap,
  ProjectWrapper,
  Info,
  CarouselWrapper,
  Clothes
} from "./styles";

import candlefund1 from "./assets/candle1.png";
import candlefund2 from "./assets/candle2.png";
import candlefund3 from "./assets/candle3.png";
import candlefund4 from "./assets/candle4.png";

import farm1 from "./assets/farm1.png";
import farm2 from "./assets/farm2.png";
import farm3 from "./assets/farm3.png";
import farm4 from "./assets/farm4.png";
import farm5 from "./assets/farm5.png";
import farm7 from "./assets/farm7.png";
import farm8 from "./assets/farm8.png";
import farm9 from "./assets/farm9.png";
import farm10 from "./assets/farm10.png";
import farm11 from "./assets/farm11.png";
import farm12 from "./assets/farm12.png";
import farm13 from "./assets/farm13.png";
import farm14 from "./assets/farm14.png";

import clothes1 from "./assets/clothes1.jpg";
import clothes2 from "./assets/clothes2.jpg";
import clothes3 from "./assets/clothes3.jpg";
import clothes9 from "./assets/clothes9.png";

import form1 from "./assets/form1.png";
import form2 from "./assets/form2.png";

class Projects extends Component {
  render() {
    return (
      <Wrapper>
        <Text fontSize={["2em", "3em", "4em"]} mb={"30px"} pt="50px">
          my portfolio
        </Text>

        <ProjectWrapper>
          <Link
            href="https://candlefund.org/"
            fontSize={["1em", "2em", "2em"]}
            target="_blank"
          >
            <b>Candle Growth Fund </b>
          </Link>
          <Text color="#e5e5e5">August 2018 - Present </Text>
          <Text>An educational investment fund founded by a friend.</Text>
          <Text mb={"12px"}>Built using Node.js and React.</Text>
          <CarouselWrapper ml={["3%", "20%", "20%"]}>
            <Carousel autoPlay={true} width="80%">
              <div>
                <img src={candlefund1} />
              </div>
              <div>
                <img src={candlefund4} />
              </div>
              <div>
                <img src={candlefund3} />
              </div>
              <div>
                <img src={candlefund4} />
              </div>
            </Carousel>
          </CarouselWrapper>
        </ProjectWrapper>
        <ProjectWrapper mt="20px">
          <Link
            href="https://farmnivorous-web-staging.herokuapp.com/market/products"
            fontSize={["1em", "2em", "2em"]}
            target="_blank"
          >
            <b>Farmnivorous</b>
          </Link>
          <Text color="#e5e5e5">July 2018 - Present </Text>
          <Text>An online farmer's market and much more! </Text>
          <Text mb={"12px"}>Built using Node.js, React, and Graphql.</Text>
          <CarouselWrapper ml={["3%", "20%", "20%"]}>
            <Carousel autoPlay={true} width="80%">
              <div>
                <img src={farm1} />
              </div>
              <div>
                <img src={farm2} />
              </div>
              <div>
                <img src={farm3} />
              </div>
              <div>
                <img src={farm7} />
              </div>
              <div>
                <img src={farm8} />
              </div>
              <div>
                <img src={farm9} />
              </div>
              <div>
                <img src={farm10} />
              </div>
              <div>
                <img src={farm11} />
              </div>
              <div>
                <img src={farm13} />
              </div>
              <div>
                <img src={farm14} />
              </div>
            </Carousel>
          </CarouselWrapper>
        </ProjectWrapper>
        <ProjectWrapper mt="20px">
          <Link
            href="https://www.clothespin.info/login"
            fontSize={["1em", "2em", "2em"]}
            target="_blank"
          >
            <b>HSA Cleaners</b>
          </Link>
          <Text color="#e5e5e5">July 2018 - August 2018 </Text>
          <Text> Laundry delivery application for Harvard Students. </Text>
          <Text mb={"12px"}>
            Built using Node.js, React Native, and Graphql.
          </Text>
          <CarouselWrapper ml={["3%", "20%", "20%"]}>
            <Carousel autoPlay={true} width="80%" dynamicHeight={true}>
              <Clothes>
                <img src={clothes1} />
              </Clothes>
              <div>
                <img src={clothes2} />
              </div>
              <div>
                <img src={clothes3} />
              </div>
              <div>
                <img src={clothes9} />
              </div>
            </Carousel>
          </CarouselWrapper>
        </ProjectWrapper>
        <ProjectWrapper mt="20px">
          <Link
            href=" https://devpost.com/software/form-check-l3vfgq?ref_content=contribution-prompt&ref_feature=engagement&ref_medium=email&utm_campaign=contribution-prompt&utm_content=contribution_reminder&utm_medium=email&utm_source=transactional#app-team
        "
            fontSize={["1em", "2em", "2em"]}
            target="_blank"
          >
            <b>Form Check</b>
          </Link>
          <Text color="#e5e5e5">September 2018 - September 2018 </Text>
          <Text>
            Upload a workout video and algorithm checks to see if form is
            correct.
          </Text>
          <Text mb={"12px"}>
            Built using Flask, Microsoft Azure, Google Compute Engine and
            HTML/CSS.
          </Text>
          <CarouselWrapper ml={["3%", "20%", "20%"]}>
            <Carousel autoPlay={true} width="80%" dynamicHeight={true}>
              <Clothes>
                <img src={form1} />
              </Clothes>
              <div>
                <img src={form2} />
              </div>
            </Carousel>
          </CarouselWrapper>
        </ProjectWrapper>

        {/* <div> PsetBuddy </div>
        <div> CavenyArch </div> 
        <div> Lullaby </div>
        */}
      </Wrapper>
    );
  }
}

export default Projects;
