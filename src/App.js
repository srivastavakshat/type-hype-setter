import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Settings from "./components/Settings";
import Preview from "./components/Preview";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header header"
    "settings preview";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Header />
        <Settings />
        <Preview />
      </Container>
    );
  }
}

export default App;
