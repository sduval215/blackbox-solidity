import React, { useState, useEffect } from 'react';
import BlackBox from '../../contracts/BlackBox.json';
import { loadWeb3 } from '../../helpers/web3';

import {
  Wrapper,
  Container,
  Logo,
  Paragraph,
  Title,
  FileInputContainer,
  SubmitButton
} from './Main.styled';

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const Main = () => {

  const [buffer, setBuffer] = useState(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [web3Loaded, setWeb3Loaded] = useState<boolean>(false);

  const [account, setAccount] = useState<string>('0x0');
  const [blackboxContract, setBlackboxContract] = useState<any>(null);

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
      await blackboxContract.methods.publishFile(hashPath).send({ from: account }).on('transactionHash', () => {
        resetFileStates();
      }) 
    } catch(error) {
      resetFileStates();
      console.log(error);
    }
  }

  const getBlockchainData = async () => {
    // @ts-ignore
    const web3 = window.web3;

    // get account information
    const accounts = await web3.eth.getAccounts();

    setAccount(accounts[0]);

    // get blackbox contract data
    const networkId = await web3.eth.net.getId();
    // @ts-ignore
    const blackboxData = BlackBox.networks[networkId];
    if(blackboxData) {
      const abi = BlackBox.abi;
      const address = blackboxData.address;
      const blackboxContract = new web3.eth.Contract(abi, address);
      setBlackboxContract(blackboxContract);

      setWeb3Loaded(true);
    } else {
      window.alert('Smart contract not found on this network. Please try again..');
    }
  }

  useEffect(() => {
    async function loadBlockchain() {
      await loadWeb3();
      await getBlockchainData();
    }

    if(!web3Loaded) {
      loadBlockchain();
    }
  }, [web3Loaded])

  return (
    <Wrapper>
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
