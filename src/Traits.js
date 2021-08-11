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
    <React.Fragment>
      <Link to="/gallery" className="link"><button className="btn3">Back</button></Link>
      <article className="infocard">
        <img src={ botero[0].image } alt="NFTinfo" className="nftimg"/>
        <div className="info"><h1>Description:</h1><h3>{ botero[1].description }</h3></div>
      </article>
    </React.Fragment>
  );

}
export default Traits
