import React, { Component } from "react";

import { NavBarWrapper, Wrapper, Links } from "./styles";

class Nav extends Component {
  render() {
    const now = window.location.hash;

    return (
      <Wrapper>
        <NavBarWrapper
          fontSize={["1em", "2em", "2em"]}
          width={["100vw", "80vw", "70vw"]}
          ml={["3%", "13%", "18%"]}
        >
          <Links href="#About" current={now === "#About"}>
            about
          </Links>
          <Links href="#Projects" current={now === "#Projects"}>
            projects
          </Links>
          <Links href="#Contact" current={now === "#Contact"}>
            contact
          </Links>
        </NavBarWrapper>
      </Wrapper>
    );
  }
}

export default Nav;
