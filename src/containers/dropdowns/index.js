import React from "react";
import PropTypes from 'prop-types';

import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";

/**
 * Need to render this component for every dropdown
 */

const renderDropDown = dropdown => {
  switch (dropdown) {
    case "message":
      return <Messages key={1}/>;
    case "notification":
      return <Notifications key={2}/>;
    case "profile":
      return <Profile key={3}/>;
    default:
      return;
  }
};

const DropDowns = ({ dropDownArray }) => {
  return (
    <div className="dropdowns">
      {dropDownArray &&
        dropDownArray.map(itemName => renderDropDown(itemName))
      }
    </div>
  );
};

DropDowns.propTypes = {
  dropDownArray: PropTypes.array.isRequired
};

export default DropDowns;
