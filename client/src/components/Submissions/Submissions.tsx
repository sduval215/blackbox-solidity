import React, { useEffect, useState } from 'react';

import {
  Wrapper,
  Container,
  Header,
  Exit
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
      const submissions = await contract.methods.getUserSubmissions(address).call();
      setSubmissions(submissions);
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
        {submissions ? submissions.reverse().map(({ pathHash, published, title }:Sub) => (
          <Submission pathHash={pathHash} published={published} title={title} />
        )) : <p></p>}
      </Container>
    </Wrapper>
  )
}

export default Submissions;
