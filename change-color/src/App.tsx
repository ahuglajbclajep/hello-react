import React from "react";
import styled from "styled-components";

const StyledApp = styled.div`
  width: 10vw;
  min-width: 150px;
`;

const Rect = styled.div<{ color: string }>`
  padding-top: 100%;
  border-radius: 1rem;
  background-color: ${props => props.color};
`;

const StyledNav = styled.nav`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar: React.FunctionComponent<{
  color: string;
  prev: (e: React.MouseEvent<HTMLButtonElement>) => void;
  next: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ color, prev, next }) => (
  <StyledNav>
    <button onClick={prev}>&laquo;</button>
    {color}
    <button onClick={next}>&raquo;</button>
  </StyledNav>
);

export default class App extends React.Component<{}, { index: number }> {
  private corols = ["red", "blue", "yellow"];
  state = { index: 0 };

  prev() {
    this.setState(({ index }) => ({
      index: index === 0 ? this.corols.length - 1 : index - 1
    }));
  }

  next() {
    this.setState(({ index }) => ({
      index: this.corols.length - 1 === index ? 0 : index + 1
    }));
  }

  render() {
    return (
      <StyledApp>
        <Rect color={this.corols[this.state.index]} />
        <NavBar
          color={this.corols[this.state.index]}
          prev={this.prev.bind(this)}
          next={this.next.bind(this)}
        />
      </StyledApp>
    );
  }
}
