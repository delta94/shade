import React from "react";
import { Link } from 'react-router-dom';

const Notifications = ({ onClick, active }) => (
  <div className={active.has("Notifications") ? "active dropdown" : "dropdown"}>
    <button
      className="trigger-dropdown"
      onClick={() => onClick("Notifications")}
    >
      <i className="fa fa-bell" />
    </button>

    <div className="dropdown-body">
      <h5>Notifications</h5>
      <div className="content">
        some content
      </div>

      <Link to="/messages" className="view-all">View All Notifications</Link>
    </div>
  </div>
);

export default Notifications;
