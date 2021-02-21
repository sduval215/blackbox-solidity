import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Logo, RightHandContainer, Address, Submissions } from './Header.styled';

interface Props {
  address: string;
  setShowAccounts: any;
}

const Header = ({ address, setShowAccounts }:Props) => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>

      <RightHandContainer>
        <Submissions onClick={setShowAccounts}>
          Submissions
        </Submissions>
        <Address>
          {address}
        </Address>
      </RightHandContainer>
    </Wrapper>
  )
}

export default Header;
