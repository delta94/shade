import React from "react";
import { Link } from 'react-router-dom';

const Messages = ({ onClick, active }) => (
  <div className={active.has("Message") ? "active dropdown" : "dropdown"}>
    <button className="trigger-dropdown" onClick={() => onClick("Message")}>
      <i className="fa fa-envelope" />
    </button>

    <div className="dropdown-body">
      <h5>Message</h5>
      <div className="content">
        some content
      </div>
      <Link to="/messagesl" className="view-all">View All Message</Link>

    </div>
  </div>
);

export default Messages;
