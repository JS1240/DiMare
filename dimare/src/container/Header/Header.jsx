import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* <SubHeading title="ucinimo zivot sladjim" /> */}
      <h1 className="app__header-h1">DESERTI I U VASEM KRAJU</h1>
      <p className="p__cormorant" style={{ margin: '1rem 4rem' }}>Ucinimo zivot sladjim</p>
    </div>
    {/* <div className="app__wrapper_img">

    </div> */}
  </div>
);

export default Header;
