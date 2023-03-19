import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Button = styled.button<{ primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `};
`;

const StyledComponent = () => {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
  );
};

export default StyledComponent;