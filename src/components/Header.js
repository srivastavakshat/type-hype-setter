import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  grid-area: header;
  border-bottom: thin solid lightgray;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  h1 {
    font-size: 1rem;
    font-variant-caps: all-small-caps;
    letter-spacing: 0.03em;
    text-align: center;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StyledHeader>
        <h1>Type Hype Setter</h1>
      </StyledHeader>
    );
  }
}

export default Header;
