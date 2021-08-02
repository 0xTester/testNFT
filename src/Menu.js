import React from 'react';
import { Link } from 'react-router-dom';



const Menu = () => {


return (
  <React.Fragment>
    <div className="App">
      <header className="intro">
        <div className="buttons">
          <Link className="link" to="/mint"><button className="btn">Minting</button></Link>
          <div className="divider"/>
          <Link className="link" to="/gallery"><button className="btn">Collection</button></Link>
        </div>
      </header>
    </div>
  </React.Fragment>
);
}

export default Menu
