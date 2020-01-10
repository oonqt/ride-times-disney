import React, { Component, Fragment } from 'react';
import { Container } from "reactstrap";

import Navbar from "./components/layout/Navbar";
import Rides from "./components/RideTimes/Rides";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Rides />
        </Container>
      </Fragment>
    )
  }
}

export default App;