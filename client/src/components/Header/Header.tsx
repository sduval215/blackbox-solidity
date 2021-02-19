import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Logo, RightHandContainer, Address } from './Header.styled';

interface Props {
  address: string;
}

const Header = ({ address }:Props) => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>

      <RightHandContainer>
        <Address>
          {address}
        </Address>
      </RightHandContainer>
    </Wrapper>
  )
}

export default Header;
