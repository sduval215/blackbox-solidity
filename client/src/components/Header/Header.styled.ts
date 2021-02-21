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

export const Submissions = styled.button`
  cursor: pointer;
  border: none;
  padding: 13px 15px;
  background: linear-gradient(265.74deg,#BD00FF 5.03%,rgba(255,31,138,0.75) 129.13%);
  margin-right: 10px;
  border-radius: 4px;
  color: #FFF;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 600;
`

export const Address = styled.div`
  background-color: rgb(241, 242, 246);
  border-radius: 4px;
  max-width: 125px;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`