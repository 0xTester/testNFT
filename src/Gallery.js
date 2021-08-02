import React from 'react';
import { Link } from 'react-router-dom';
import { nfts } from './nfts'
import Nft from './Nft'

const Gallery = () => {

return (
  <React.Fragment>
    <Link to="/" className="link"><button className="btn3">Home</button></Link>
    <div className = 'gallery'>
      {nfts.map((nft) => {
        return (
          <Nft key={nft.id} {...nft}></Nft>
        );
      }
    )
  }
</div>
  </React.Fragment>
);
}

export default Gallery
