import React from 'react';
import { Link } from 'react-router-dom';
import Boteros from './Boteros.json'
import {ethers} from "ethers";


const Mint = () => {

  const contractAddress = '0x3c21642Ad0F09062F9ff4BE895939090092b2C4a';
  const provider = new ethers.providers.Web3Provider(window.ethereum);



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

  return (
      <React.Fragment>
          <Link to="/" className="link"><button className="btn3">Home</button></Link>
          <div className="App">
          <header className="intro">
            <div className="buttons">
              <button className="btn" onClick={() => askMintBoteros()}>Mint 1</button>
              <div className="divider"/>
              <button className="btn" onClick={() => askMintBoteros()}>Mint 3</button>
              <div className="divider"/>
              <button className="btn" onClick={() => askMintBoteros()}>Mint 5</button>
            </div>
          </header>
        </div>
      </React.Fragment>
  );
 }


export default Mint
