import React, { useEffect, useState } from 'react';

import {
  Wrapper,
  Container,
  Header,
  Exit
} from './Submissions.styled';

interface Props {
  contract: any;
  address: string;
  setShowAccounts: any;
}

const Submissions = ({ contract, address, setShowAccounts }:Props) => {

  const [submissions, setSubmissions] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function fetchSubmissions()  {
      const submissions = await contract.methods.getUserSubmissions(address).call();
      setSubmissions(submissions);
      setIsLoaded(true);
    }

    if(!isLoaded && address && contract) {
      fetchSubmissions();
    }
  }, [isLoaded, address, contract]);

  return (
    <Wrapper>
      <Container>
        <Header>Previous Submissions</Header>
        <Exit onClick={() => setShowAccounts(false) } />
      </Container>
    </Wrapper>
  )
}

export default Submissions;
