import React from "react";
import styled from "styled-components";
const ReactMarkdown = require("react-markdown");

const input = "# This is a header\n\nAnd this is a paragraph";

const Container = styled.div`
  grid-area: preview;
  background: #eee;
  padding: 2rem;
`;

const PreviewCard = styled.div`
  box-sizing: border-box;
  background: white;
  overflow: auto;
`;

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <Container>
        <PreviewCard>
          <ReactMarkdown source={input} />
        </PreviewCard>
      </Container>
    );
  }
}

export default Preview;
