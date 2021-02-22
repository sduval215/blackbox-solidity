import React, { useEffect, useState } from 'react';

import {
  Wrapper,
  Container,
  Header,
  Exit,
  SubmissionsContainer
} from './Submissions.styled';

import Submission from './Submission';
import { Submission as Sub } from '../../types';

interface Props {
  contract: any;
  address: string;
  setShowAccounts: any;
}

const Submissions = ({ contract, address, setShowAccounts }:Props) => {

  const [submissions, setSubmissions] = useState<Array<Sub> | null>(null);

  useEffect(() => {
    async function fetchSubmissions()  {
      try {
        const submissions = await contract.methods.getUserSubmissions().call({ from: address });
        setSubmissions(submissions);
      } catch(error) {
        console.log(error);
      }
    }

    if(address && contract) {
      fetchSubmissions();
    }
  }, [address, contract]);

  return (
    <Wrapper>
      <Container>
        <Header>Previous Submissions</Header>
        <Exit onClick={() => setShowAccounts(false) } />
        <SubmissionsContainer>
          {submissions && submissions.length > 0 ? submissions.reverse().map(({ pathHash, published, title }:Sub) => (
            <Submission key={published} pathHash={pathHash} published={published} title={title} />
          )) : <p>No submissions</p>}
        </SubmissionsContainer>
      </Container>
    </Wrapper>
  )
}

export default Submissions;
