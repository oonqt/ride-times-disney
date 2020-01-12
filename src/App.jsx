import React, { Component } from 'react';
import { Container } from "reactstrap";

import Navbar from "./components/layout/Navbar";
import Rides from "./components/RideTimes/Rides";

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="bg-filter">
          <Navbar />
          <Container className="mt-5 mb-5">
            <Rides />
          </Container>
        </div>
      </div>
    )
  }
}

export default App;