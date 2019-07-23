import React from "react";

import DropDowns from '../containers/dropdowns';

const dropDownLists = ['message', 'notification', 'profile']

const Header = () => (
  <header className="d-flex align-items-center justify-content-between">
    <div className="left">
      <h3 className="logo">Shade</h3>
    </div>
    <div className="right">
      <DropDowns dropDownArray={dropDownLists} />
    </div>
  </header>
);

export default Header;
