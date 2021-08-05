import React from 'react';
import { Link } from 'react-router-dom';
import Boteros from './Boteros.json'
import {ethers} from "ethers";


const Mint = () => {
  const address = '0x83a775e96910b43a5E52d684247BbFa2Fe4920F3';

  async function buyBotero() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log({ provider });
    this.BoteroWallet = new ethers.Contract(address, Boteros, provider);

  }

type askMintBoterosProps = {
  numberOfBoteros: number;
}

  function askMintBoteros(props:askMintBoterosProps) {
    const  {numberOfBoteros} = props;
    const  accountAddress = window;

    const mint1BoteroGasTotal = Math.floor(244658*1.2);
    const mint3BoteroGasTotal = Math.floor(572178*1.2);
    const mint5BoteroGasTotal = Math.floor(1669602*1.2);

    // uint256 public constant unitPrice = 100000000000000000; // 0.10 ether
    // uint256 public constant tripletPrice = 240000000000000000; // 0.24 ether
    // uint256 public constant quintoPrice = 400000000000000000; // 0.4 ether

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const BoteroWallet = new ethers.Contract(address, Boteros, provider);
    const BoteroWallet_rw = new ethers.Contract(address, Boteros, signer);

    let buyBoteroFunction = BoteroWallet.mintOneBotero
    let weiValue = 100000000000000000;
    let gasTotal = mint1BoteroGasTotal;

    if(numberOfBoteros === 1){
      buyBoteroFunction.sendTransaction(1,{
        address: accountAddress,
        from: accountAddress,
        gas: gasTotal,
        value: weiValue
      }, (err, tx) => {
        if(err) {
          console.log(err)
        }
      })
      return
    }

    if(numberOfBoteros === 3){
      gasTotal = mint3BoteroGasTotal;
      weiValue = 240000000000000000;
      buyBoteroFunction = BoteroWallet.mintThreeBotero;
    }

    if(numberOfBoteros ===5){
      gasTotal = mint5BoteroGasTotal;
      weiValue = 400000000000000000;
      buyBoteroFunction = BoteroWallet.mintFiveBotero;
    }

    buyBoteroFunction.sendTransaction({
      address: accountAddress,
      from: accountAddress,
      gas: gasTotal,
      value: weiValue
    }, (err, tx) => {
      if(err) {
        console.log(err)
      }
    })
  }

  function sayHello() {
     alert('Hello!');
   }

  return (
      <React.Fragment>
          <Link to="/" className="link"><button className="btn3">Home</button></Link>
          <div className="App">
          <header className="intro">
            <div className="buttons">
              <button className="btn" onClick={() => askMintBoteros(1)}>Mint 1</button>
              <div className="divider"/>
              <button className="btn" onClick={() => askMintBoteros(3)}>Mint 3</button>
              <div className="divider"/>
              <button className="btn" onClick={() => askMintBoteros(5)}>Mint 5</button>
            </div>
          </header>
        </div>
      </React.Fragment>
  );
}

export default Mint
