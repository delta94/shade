import React from "react";

const Messages = ({ onClick, active }) => (
  <div
    onClick={() => onClick('Message')}
    className={active.has('Message') ? 'active' : ''}
  >
    Messages
  </div>
);

export default Messages;
