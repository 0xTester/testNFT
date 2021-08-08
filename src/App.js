import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ethers} from "ethers";
import './App.css';
import Menu from './Menu'
import Mint from './Mint'
import Gallery from './Gallery'

const address = '0x83a775e96910b43a5E52d684247BbFa2Fe4920F3';


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
      <div className="App">
            <header className="intro">
              <img className="logo" alt="logo_image" src="https://www.coinsmos.com/static/images/coinsmoslogo.922cb8304622.png"/>
              <button className="btn1" onClick={() => authenticate()}>Sign in</button>
              <p>
                Welcome
              </p>
            </header>
          </div>
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
      </Switch>
    </React.Fragment>
  </Router>
);
}
export default App;
