import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <ScrollableAnchor id={"About"}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={"Projects"}>
          <Projects />
        </ScrollableAnchor>
        <ScrollableAnchor id={"Contact"}>
          <Contact />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Home;
