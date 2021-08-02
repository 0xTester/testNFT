import React from 'react';
import { Link } from 'react-router-dom';


const Mint = () => {


  return (
      <React.Fragment>
          <Link to="/" className="link"><button className="btn3">Home</button></Link>
          <div className="App">
          <header className="intro">
            <div className="buttons">
              <Link className="link"><button className="btn">Mint 1</button></Link>
              <div className="divider"/>
              <Link className="link"><button className="btn">Mint 3</button></Link>
              <div className="divider"/>
              <Link className="link"><button className="btn">Mint 5</button></Link>
            </div>
          </header>
        </div>
      </React.Fragment>
  );
}

export default Mint
