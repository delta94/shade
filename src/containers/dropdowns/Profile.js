import React from "react";

const Profile = ({ onClick, active }) => (
  <div className={active.has("Profile") ? "active dropdown" : "dropdown"}>
    <button className="trigger-dropdown" onClick={() => onClick("Profile")}>
      <i className="fa fa-user" />
    </button>
    <div className="dropdown-body">
      <h5>Profile</h5>
      <div className="content">
        some content
      </div>
    </div>
  </div>
);

export default Profile;
