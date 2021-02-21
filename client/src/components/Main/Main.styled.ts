import styled, { css } from 'styled-components';

import { ReactComponent as LogoIcon } from '../../assets/icon.svg';

const BaseButton = css`
  cursor: pointer;
  background: linear-gradient(265.74deg, #BD00FF 5.03%, rgba(255, 31, 138, 0.75) 129.13%);
  font-family: sans-serif;
  font-weight: bold;
  color: #FFF;
  border: none;
`

export const Status = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: linear-gradient(265.74deg, #BD00FF 5.03%, rgba(255, 31, 138, 0.95) 129.13%);
  font-weight: 600;
  padding: 15px 20px;
  border-radius: 8px;
  color: #FFF;
  font-family: sans-serif;
`

export const Wrapper = styled.div`
  height: 94vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  max-width: 400px;
`

export const Logo = styled(LogoIcon)`
  height: 50px;
  width: 50px;
  display: block;
  margin: 0 auto;
`

export const Title = styled.p`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 25px 0;
`

export const Paragraph = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  margin-bottom: 15px;
`

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  input {
    display: none;
  }
  label {
    ${BaseButton}
    padding: 12px 20px;
    font-size: 12px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  p {
    border: 1px solid #DCDBDB;
    padding: 10px 0;
    padding-left: 10px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const SubmitButton = styled.button`
  ${BaseButton}
  padding: 13px 35px;
  font-size: 12px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`
