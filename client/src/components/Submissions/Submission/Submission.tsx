import React from 'react';

import {
  Wrapper,
  Container,
  Copy,
  Published
} from './Submission.styled';

import { Submission } from '../../../types';

const Submissions = ({ pathHash, published }:Submission) => {

  const formattedDate = new Date(Number(published) * 1000).toLocaleDateString();

  return (
    <Wrapper>
      <Published>Published: {formattedDate}</Published>
      <Container>
        <p>{pathHash}</p>
        <Copy />
      </Container>
    </Wrapper>
  )
}

export default Submissions;
