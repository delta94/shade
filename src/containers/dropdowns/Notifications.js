import React from "react";

const Notifications = ({ onClick, active }) => (
  <div className={active.has("Notifications") ? "active" : ""}>
    <button
      className="trigger-dropdown"
      onClick={() => onClick("Notifications")}
    >
      <i className="fa fa-bell" />
    </button>
  </div>
);

export default Notifications;
