import React, { useState } from "react";
import PropTypes from 'prop-types';

import { renderDropDown } from './renderDropDown';

const DropDowns = ({ dropDownArray }) => {
  const [itemName, setItemName] = useState(new Set([]));

  /**
   * Listen click from component props
   * store clicked component name to state
   * to set active classname to the selected component
   *
   * @param {e} string
   */
  const onClickDropDown = activeItem => {
    const activeItemName = new Set([]);

    activeItemName.add(activeItem);
    setItemName(activeItemName);
  };

  return (
    <div className="dropdowns">
      {dropDownArray &&
        dropDownArray.map(item =>
          renderDropDown(item, itemName, onClickDropDown)
        )}
    </div>
  );
};

DropDowns.propTypes = {
  dropDownArray: PropTypes.array.isRequired
};

export default DropDowns;
