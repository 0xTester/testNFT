import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nft from './Nft'
import {ethers} from "ethers";
import Boteros from './Boteros.json'

const Gallery = () => {

  const contractAddress = '0x3c21642Ad0F09062F9ff4BE895939090092b2C4a';
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [wallet, setWallet] = useState('');
  const [botBalance, setBalance] = useState(null);
  const [collection, setCollection] = useState([]);


async function balance() {

  const readOnlyContract = new ethers.Contract(contractAddress, Boteros, provider);
  const signer = provider.getSigner();
  const ethAddress = await signer.getAddress();
  setWallet(ethAddress);
  const boteroBalance = await readOnlyContract.balanceOf(ethAddress);
  console.log(boteroBalance.toString());
  setBalance(boteroBalance.toString());

  const boteroArray = [];

  for ( var i = 0; i < boteroBalance.toNumber(); i++) {
    const boter = await readOnlyContract.tokenOfOwnerByIndex(ethAddress, i);
    const tokenUri = await readOnlyContract.tokenURI(boter.toNumber());
    const metadata = await fetch(tokenUri.toString())
    const restJson = await metadata.json();
    boteroArray.push(restJson);
  }

  setCollection(boteroArray);

}

console.log(collection);
balance();

return (
  <React.Fragment>
    <Link to="/" className="link"><button className="btn3">Home</button></Link>
    <div className = 'gallery'>
      {collection.map((object) => {
        return (
          <Nft key={object.id} {...object}></Nft>
        );
      }
    )
  }
</div>
  </React.Fragment>
);
}

export default Gallery
