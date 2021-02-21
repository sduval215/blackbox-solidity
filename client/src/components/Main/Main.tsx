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

import Submissions from '../Submissions';

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

interface Props {
  contract: any;
  address: string;
  showAccounts: boolean;
  setShowAccounts: any;
}

const Main = ({ contract, address, showAccounts, setShowAccounts }:Props) => {

  const [buffer, setBuffer] = useState(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  /**
   * Resets all file states
   */
  const resetFileStates = () => {
    setUploading(false);
    setFileName(null);
    setBuffer(null);
  }

  /**
   * Handles file buffer data capturing to state
   * @param {HTMLFormEvent} e 
   */
  const handleCapture = (e:any) => {
    e.preventDefault();
    // process file
    const file = e.target.files[0];
    setFileName(file.name);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      // @ts-ignore
      setBuffer(Buffer(reader.result));
    };
  }

  /**
   * Handles file upload to IPFS
   * hash example: QmcWmbPe7N54oVAAwguGVhmKXEgxDCBmKzDpBrXEfAPcDe
   * IPFS url example: https://ipfs.infura.io/ipfs/QmcWmbPe7N54oVAAwguGVhmKXEgxDCBmKzDpBrXEfAPcDe
   * @param {HTLMFormEvent} e 
   */
  const handleUpload = async (e:any) => {
    setUploading(true);
    e.preventDefault();
    try {
      const result = await ipfs.add(buffer);
      const hashPath = result.path;

      // test hash: Qmaf6F2RRDXwgSkhXsi7efZxQkyQ4bYyr7jDAPgSeVHJfk

      // upload to ETH smart contract
      await contract.methods.publishFile(hashPath).send({ from: address }).on('transactionHash', () => {
        resetFileStates();
      }) 
    } catch(error) {
      resetFileStates();
      console.log(error);
    }
  }

  return (
    <Wrapper>
      {showAccounts && <Submissions setShowAccounts={setShowAccounts} contract={contract} address={address} />}
      <Container>
        <Logo />
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
          disabled={!fileName || uploading}
        >
          {uploading ? 'UPLOADING..' : 'SUBMIT'}
        </SubmitButton>
        
      </Container>
    </Wrapper>
  )
}

export default Main;
