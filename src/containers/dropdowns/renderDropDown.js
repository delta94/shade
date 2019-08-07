import React from 'react';

import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";

/**
 * Render different component
 * based on dropdown item name
 *
 * @param {dropdown} string item names
 * @param {activeItemName} string the name of the item which is clicked
 * @param {onClickDropDown} function which trigger onClick component event
 *
 * @return {Element} Return component based on dropdown item name
 */

export const renderDropDown = (dropdown, activeItemName, onClickDropDown) => {
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
