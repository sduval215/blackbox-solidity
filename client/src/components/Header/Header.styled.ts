import styled from 'styled-components';

import { ReactComponent as LogoIcon } from '../../assets/icon.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  padding: 0 15px;
  box-sizing: border-box;
`

export const Logo = styled(LogoIcon)`
  height: 20px;
  width: 20px;
`

export const RightHandContainer = styled.div`
  display: flex;
`

export const Address = styled.div`
  background-color: rgb(241, 242, 246);
  border-radius: 4px;
  max-width: 125px;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`