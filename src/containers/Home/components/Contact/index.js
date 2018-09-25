import React, { Component } from "react";

import { Wrapper, Link } from "./styles";

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <Link
          href="mailto:nchen1@college.harvard.edu?Subject=Contact From Website"
          target="_top"
        >
          send me a message!
        </Link>
      </Wrapper>
    );
  }
}

export default Contact;
