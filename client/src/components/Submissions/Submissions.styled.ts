import styled from 'styled-components';

import { ReactComponent as ExitIcon } from '../../assets/cancel-icon.svg';

export const Wrapper = styled.div`
  z-index: 10;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`

export const Container = styled.div`
  background-color: #FFF;
  max-width: 500px;
  width: 100%;
  border-radius: 4px;
  padding: 20px;
  position: relative;
`

export const SubmissionsContainer = styled.div`
  max-height: 600px;
  overflow: scroll;
`

export const Header = styled.h3`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const Exit = styled(ExitIcon)`
  position: absolute;
  top: 15px;
  right: 15px;
  height: 12px;
  cursor: pointer;
`