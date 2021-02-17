import React, { useState } from 'react';

import {
  Wrapper,
  Container,
  Logo,
  Paragraph,
  Title,
  FileInputContainer,
  SubmitButton
} from './Main.styled';

const Main = () => {

  const [buffer, setBuffer] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleCapture = (e) => {
    e.preventDefault();
    // process file
    const file = e.target.files[0];
    setFileName(file.name);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setBuffer(Buffer(reader.result));
    };
  }

  const handleUpload = (e) => {
    e.preventDefault();
    console.log('submitting form with buffer: ', buffer);
  }

  return (
    <Wrapper>
      <Container>
        <Logo alt="blackox-logo" />
        <Title>
          BLACKBOX
        </Title>
        <Paragraph>
          A simple GUI interface to upload immutable 
          files onto IPFS. <span role="img" aria-label="globe">🌎</span>
        </Paragraph>
        <Paragraph>
          All data handled through an Ethereum smart contract and can be retrieved at any time.
        </Paragraph>
        
        <FileInputContainer>
          <label htmlFor="file">UPLOAD</label>
          <input id="file" type="file" onChange={handleCapture}/>
          <p>{fileName || 'Upload a file..'}</p>
        </FileInputContainer>

        <SubmitButton
          onClick={handleUpload}
          disabled={!fileName}
        >
          SUBMIT
        </SubmitButton>
        
      </Container>
    </Wrapper>
  )
}

export default Main;
