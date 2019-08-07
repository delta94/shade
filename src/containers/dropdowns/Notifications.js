import React from "react";

const Notifications = ({ onClick, active }) => (
  <div
    onClick={() => onClick('Notifications')}
    className={active.has('Notifications') ? 'active' : ''}
  >
    Notifications
  </div>
);

export default Notifications;
