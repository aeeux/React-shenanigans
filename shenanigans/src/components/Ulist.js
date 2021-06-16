import React from "react";
import styled from 'styled-components';

const Ulist = ({}) => {

  return (
      <Container>
        <ul>
          <li>Hi</li>
          <li>Sup</li>
          <li>Ciao</li>
          <li>Hej</li>
        </ul>
      </Container>
  )
}

export default Ulist

const Container = styled.div`
  background-color: #ff8000;
`;