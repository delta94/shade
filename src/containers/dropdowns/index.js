import React, { useState } from "react";
import PropTypes from 'prop-types';

import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";

/**
 * Need to render this component for every dropdown
 */



const DropDowns = ({ dropDownArray }) => {
  const [itemIndex, setItemIndex] = useState(new Set([]));

  const onClickDropDown = e => {
    const activeItem = new Set([]);
    activeItem.add(e);
    setItemIndex(activeItem);
  };

  /**
   * renderDropDown function
   * whch render different component based on
   * array items name
   * @param {dropdown} takes item names
   * @param {activeItemName} takes the name of the item which is clicked
   */

  const renderDropDown = (dropdown, activeItemName) => {
    switch (dropdown) {
      case "message":
        return (
          <Messages
            key={1}
            onClick={onClickDropDown}
            active={activeItemName}
          />
        );
      case "notification":
        return (
          <Notifications
            key={2}
            onClick={onClickDropDown}
            active={activeItemName}
          />
        );
      case "profile":
        return (
          <Profile
            key={3}
            onClick={onClickDropDown}
            active={activeItemName}
          />
        );
      default:
        return;
    }
  };

  return (
    <div className="dropdowns">
      {dropDownArray &&
        dropDownArray.map(itemName =>
          renderDropDown(itemName, itemIndex)
        )}
    </div>
  );
};

DropDowns.propTypes = {
  dropDownArray: PropTypes.array.isRequired
};

export default DropDowns;
