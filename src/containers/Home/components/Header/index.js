import React, { Component } from "react";
import Typing from "react-typing-animation";

import { Wrapper } from "./styles";

// const AnimatedTypingComponent = removeText => (

// );

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typing: true
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  handleScroll = event => {
    let scrollTop = event.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop / 3 - 60);

    this.setState({
      typing: true
    });
  };

  render() {
    const { typing } = this.state;
    console.log(typing);

    return (
      <Wrapper fontSize={["2em", "4em", "5em"]}>
        {typing && (
          // <AnimatedTypingComponent
          //   removeText={() => this.setState({ typing: false })}
          // />
          <Typing
            speed={200}
            onFinishedTyping={() => this.setState({ typing: false })}
          >
            <span> hello! </span>
            <Typing.Reset count={1} delay={300} />
            <Typing.Delay ms={225} />
            <span> this is </span>
            <Typing.Reset count={1} delay={50} />
            <span> nina </span>
            <Typing.Delay ms={10000} />
          </Typing>
        )}
        {!typing && <div> scroll down! </div>}
      </Wrapper>
    );
  }
}

export default Header;
