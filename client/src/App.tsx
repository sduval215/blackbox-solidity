import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { loadWeb3 } from './helpers/web3';
import BlackBox from './contracts/BlackBox.json';

// COMPONENTS
import Header from './components/Header';

// PAGES
import Main from './components/Main';

import "./App.css";

const App = () => {

  const [account, setAccount] = useState<string>('0x0');
  const [blackboxContract, setBlackboxContract] = useState<any>(null);
  const [web3Loaded, setWeb3Loaded] = useState<boolean>(false);
  const [showAccounts, setShowAccounts] = useState<boolean>(true);
 
  useEffect(() => {
    async function loadBlockchain() {
      await loadWeb3();
      await getBlockchainData();
    }

    if(!web3Loaded) {
      loadBlockchain();
    }
  }, [web3Loaded]);


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

  if(!blackboxContract || !account) {
    return <p>Loading...</p>
  }

  return (
    <Router>
      <Header setShowAccounts={setShowAccounts} address={account}/>
      <Switch>
        <Route exact path="/" component={() => <Main setShowAccounts={setShowAccounts} showAccounts={showAccounts} address={account} contract={blackboxContract} />}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
