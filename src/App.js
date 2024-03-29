import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ethers} from "ethers";
import './App.css';
import Menu from './Menu'
import Mint from './Mint'
import Gallery from './Gallery'
import Traits from './Traits'

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [wallet, setWallet] = useState('');

async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

async function authenticate() {
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const ethAddress = await signer.getAddress();
    console.log("Eth Address: ", ethAddress);
    setIsLoggedIn(true);
    setWallet(ethAddress);
    console.log(typeof wallet);
  }
}

if (!isLoggedIn) {
    return(
      <React.Fragment>
        <button className="btn1" onClick={() => authenticate()}>Sign in</button>
        <Router>
          <Switch>
            <Route exact path="/">
              <Menu/>
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
        );
  }

  return (
    <Router>
    <React.Fragment>
      <div className="walletAddress">{wallet.substring(0,6)+'...'+wallet.slice(-4)}</div>
      <Switch>
        <Route exact path="/">
          <Menu/>
        </Route>
        <Route path="/mint">
          <Mint/>
        </Route>
        <Route path="/gallery">
          <Gallery/>
        </Route>
        <Route path="/traits">
          <Traits/>
        </Route>
      </Switch>
    </React.Fragment>
  </Router>
);
}
export default App;
