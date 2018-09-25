import React, { Component } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "./theme";

// page views
import Home from "./containers/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { Wrapper } from "./styles";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Wrapper>
            <Nav />
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </Wrapper>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
