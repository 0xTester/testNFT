import React from "react";
import Boteros from './Boteros.json'
import {ethers} from "ethers";

const address = '0x83a775e96910b43a5E52d684247BbFa2Fe4920F3';

async function buyBotero() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  console.log({ provider });
  this.BoteroWallet = new ethers.Contract(address, Boteros.abi, provider);

}

function askMintBoteros(number) {
  const { numberOfBoteros } = this.props;
  const { accountAddress } = window;

  const mint1BoteroGasTotal = Math.floor(244658*1.2);
  const mint3BoteroGasTotal = Math.floor(572178*1.2);
  const mint5BoteroGasTotal = Math.floor(1669602*1.2);

  // uint256 public constant unitPrice = 100000000000000000; // 0.10 ether
  // uint256 public constant tripletPrice = 240000000000000000; // 0.24 ether
  // uint256 public constant quintoPrice = 400000000000000000; // 0.4 ether

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
    buyBoteroFunction = this.BoteroWallet.mintThreeBotero;
  }

  if(numberOfBoteros ===5){
    gasTotal = mint5BoteroGasTotal;
    weiValue = 400000000000000000;
    buyBoteroFunction = this.BoteroWallet.mintFiveBotero;
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
