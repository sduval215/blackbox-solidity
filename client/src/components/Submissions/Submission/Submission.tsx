import React, { useState } from 'react';

import {
  Wrapper,
  Container,
  CopyContainer,
  Copy,
  Published
} from './Submission.styled';

import { Submission } from '../../../types';

const Submissions = ({ pathHash, published }:Submission) => {

  const [copied, setCopied] = useState<boolean>(false);
  const formattedDate = new Date(Number(published) * 1000).toLocaleDateString();

  const copyHash = () => {
    navigator.clipboard.writeText(pathHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Wrapper>
      <Published>Published: {formattedDate}</Published>
      <Container>
        <a href={`https://ipfs.infura.io/ipfs/${pathHash}`} target="_blank" rel="noopener noreferrer">{pathHash}</a>
        <CopyContainer>
          <Copy onClick={copyHash} />
          {copied && <span>Copied!</span>}
        </CopyContainer>
      </Container>
    </Wrapper>
  )
}

export default Submissions;
