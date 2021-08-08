import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Boteros from './Boteros.json'
import {ethers} from "ethers";

const Mint = () => {

  const contractAddress = '0x3c21642Ad0F09062F9ff4BE895939090092b2C4a';
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const [botCount, setBotCount] = useState(0); //RE-view THIS FUNCTION



//type askMintBoterosProps = {
//  numberOfBoteros: number;
//
  async function askMintBoteros(){//props:askMintBoterosProps) {

    const signer = provider.getSigner();

    const readOnlyContract = new ethers.Contract(contractAddress, Boteros, provider);
    const writeContract = new ethers.Contract(contractAddress, Boteros, signer);

    const txResponse = await writeContract.mintOneBotero({value: ethers.utils.parseEther('0.1')});
    const txReceipt = await txResponse.wait();
    console.log(txReceipt);
  }
    //const ABI = Boteros;
    //const readOnlyContract = new ethers.Contract(contractAdress, ABI, provider);
    //const  {numberOfBoteros} = props;
    //const  accountAddress = window;

    //const mint1BoteroGasTotal = Math.floor(244658*1.2);
    //const mint3BoteroGasTotal = Math.floor(572178*1.2);
    //const mint5BoteroGasTotal = Math.floor(1669602*1.2);

    // uint256 public constant unitPrice = 100000000000000000; // 0.10 ether
    // uint256 public constant tripletPrice = 240000000000000000; // 0.24 ether
    // uint256 public constant quintoPrice = 400000000000000000; // 0.4 ether
    //const value = await readOnlyContract.methods.name();
    //console.log(value.toString())
    async function mintBotero() {
      const mint1BoteroGasTotal = Math.floor(244658*1.2);
      const signer = provider.getSigner();

      const readOnlyContract = new ethers.Contract(contractAddress, Boteros, provider);
      const writeContract = new ethers.Contract(contractAddress, Boteros, signer);

      const txResponse = await writeContract.mintOneBotero({value: ethers.utils.parseEther('0.1'), gasLimit:293589}).then(function(result){
        alert('Transaction success!')}).catch(function(e){
          console.log('Error')
        });
      if (typeof txResponse !== 'undefined' ){
        const txReceipt = await txResponse.wait();
      }

      setBotCount(botCount +1); //RE-VIEW

    }

  async function mintTBotero() {
      const { accountAddress } = window;
      const mint1BoteroGasTotal = Math.floor(244658*1.2);
      const signer = provider.getSigner();

      const readOnlyContract = new ethers.Contract(contractAddress, Boteros, provider);
      const writeContract = new ethers.Contract(contractAddress, Boteros, signer);

      const txResponse = await writeContract.mintThreeBotero({value: ethers.utils.parseEther('0.24'), gasLimit:686613}).then(function(result){
        alert('Transaction success!')}).catch(function(e){
          console.log('Error')
        });
      if (typeof txResponse !== 'undefined' ){
        const txReceipt = await txResponse.wait();
      }

      setBotCount(botCount + 3); //RE-VIEW

    }

  async function mintFBotero() {
      const { accountAddress } = window;
      const mint1BoteroGasTotal = Math.floor(244658*1.2);
      const signer = provider.getSigner();

      const readOnlyContract = new ethers.Contract(contractAddress, Boteros, provider);
      const writeContract = new ethers.Contract(contractAddress, Boteros, signer);

      const txResponse = await writeContract.mintFiveBotero({value: ethers.utils.parseEther('0.4'), gasLimit:2003522}).then(function(result){
        alert('Transaction success!')}).catch(function(e){
          console.log('Error')
        });
      if (typeof txResponse !== 'undefined' ){
        const txReceipt = await txResponse.wait();
      };

      setBotCount(botCount + 5); //RE-VIEW

    }

  return (
      <React.Fragment>
          <Link to="/" className="link"><button className="btn3">Home</button></Link>
          <div className="App">
          <header className="intro">
            <div className="buttons">
              <button className="btn" onClick={() => mintBotero()}>Mint 1</button>
              <div className="divider"/>
              <button className="btn" onClick={() => mintTBotero()}>Mint 3</button>
              <div className="divider"/>
              <button className="btn" onClick={() => mintFBotero()}>Mint 5</button>
            </div>
          </header>
        </div>
      </React.Fragment>
  );
 }


export default Mint
