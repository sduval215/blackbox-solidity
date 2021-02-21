import styled from 'styled-components';

import { ReactComponent as CopyIcon } from '../../../assets/copy-icon.svg';

export const Wrapper = styled.div`
  text-align: right;
  margin-bottom: 10px;
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
  overflow: hidden;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  a {
    width: 95%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #000;
  }
`

export const CopyContainer = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  height: 100%;
  background: #FFF;
  span {
    font-family: sans-serif;
    font-size: 12px;
    color: #DE0FC5;
    margin-left: 5px;
  }
`

export const Copy = styled(CopyIcon)`
  height: 16px;
  width: 16px;
  cursor: pointer;
`