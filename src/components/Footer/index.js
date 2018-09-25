import React, { Component } from "react";

import Git from "./assests/github.svg";
import Linkedin from "./assests/linked.svg";
import Facebook from "./assests/facebook.svg";

import { Wrapper, IconWrapper, Icon, Link } from "./styles";

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Link
          href="https://drive.google.com/file/d/1_VtjAIaX2YNLbxHGY28awKOPsxypS54-/view?usp=sharing"
          target="_blank"
          download
        >
          {/* <a href="/static/Nina_Chen_Resume.pdf" target="_blank"> */}
          Resume
        </Link>
        <IconWrapper>
          <a href="https://github.com/Nina3719" target="_blank">
            <Icon src={Git} alt="git" />
          </a>
          <a
            href="https://www.linkedin.com/in/nina-chen-b3b4b7146/"
            target="_blank"
          >
            <Icon src={Linkedin} alt="linkedin" />
          </a>
          <a href="https://www.facebook.com/nina.chen.3194524" target="_blank">
            <Icon src={Facebook} alt="facebook" />
          </a>
        </IconWrapper>
      </Wrapper>
    );
  }
}

export default Footer;
