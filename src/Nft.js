import React from 'react'

const Nft = ({ description, image}) => {

return (
    <article className="nft">
      <img src={ image } alt="NFT object" className="nftimage"/>
      <h2>{ description }</h2>
    </article>
);
}

export default Nft
