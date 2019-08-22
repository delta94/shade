import React, { useState, useRef } from "react";
import PropTypes from 'prop-types';

import { renderDropDown } from './renderDropDown';

import useOutsideClick from '../../hooks/useOutsideClick';

const DropDowns = ({ dropDownArray }) => {
  const [activeItemName, setActiveItemName] = useState(new Set([]));

  /**
   * Listen click from component props
   * store clicked component name to state
   * to set active classname to the selected component
   *
   * @param {activeItem} string
   */
  const onClickDropDown = activeItem => {
    const updateItemName = new Set([activeItemName]);

    // If activeItemName already has the
    // value of cliked item.
    // Remove the value to perform toggle behavior
    if (activeItemName.has(activeItem)) {
      return setActiveItemName(new Set([]));
    }

    // Otherwise update activeItemName set with
    // newly value.
    updateItemName.add(activeItem);
    setActiveItemName(updateItemName);
  };

  // Click outside event handler function and hook in play
  const ref = useRef();
  const clickOutside = () => setActiveItemName(new Set([]));
  useOutsideClick(ref, clickOutside);


  return (
    <div className="dropdowns" ref={ref}>
      {dropDownArray &&
        dropDownArray.map(item =>
          renderDropDown(item, activeItemName, onClickDropDown)
        )}
    </div>
  );
};

DropDowns.propTypes = {
  dropDownArray: PropTypes.array.isRequired
};

export default DropDowns;
