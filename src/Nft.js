import React from 'react'

const Nft = ({img, title, description}) => {

return (
    <article className="nft">
      <img src={img} alt="NFT object" className="nftimage"/>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </article>
);
}

export default Nft
