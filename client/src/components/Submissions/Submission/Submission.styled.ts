import styled from 'styled-components';

import { ReactComponent as CopyIcon } from '../../../assets/copy-icon.svg';

export const Wrapper = styled.div`
  text-align: right;
`

export const Published = styled.span`
  color: #9E9E9E;
  font-size: 10px;
  font-family: sans-serif;
  text-align: right;
  display: block;
  margin-bottom: 5px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #CBCBCB;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  p {
    font-size: 14px;
  }
`

export const Copy = styled(CopyIcon)`
  height: 16px;
  width: 16px;
  position: absolute;
  right: 20px;
  background: #FFF;
  cursor: pointer;
`