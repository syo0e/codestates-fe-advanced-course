import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../img/codestatesLogo.png';

function Header() {
  return (
    <Container>
      <Link to="/">
        <HeaderImg src={Logo} alt="logo" />
      </Link>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 30px;
`;

const HeaderImg = styled.img`
  width: 200px;
`;
