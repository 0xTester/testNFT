import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nft from './Nft'
import {ethers} from "ethers";
import Boteros from './Boteros.json'


const Traits = () => {
  const location = useLocation();
  const { botero } = location.state;
 console.log(botero)
  return (
      <article className="infocard">
        <img src={ botero[0].image } alt="NFTinfo" className="nftimginfo"/>
        <h2>{ botero[1].description }</h2>
      </article>
  );

}
export default Traits
