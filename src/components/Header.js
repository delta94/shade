import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import DropDowns from '../containers/dropdowns';

const dropDownLists = ['message', 'notification', 'profile']

const Header = () => (
  <Router>
    <header className="d-flex align-items-center justify-content-between">
      <div className="left">
        <h3 className="logo">Shade</h3>
      </div>
      <div className="right">
        <DropDowns dropDownArray={dropDownLists} />
      </div>
    </header>
  </Router>
);

export default Header;
