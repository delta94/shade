import React from "react";

const Profile = ({ onClick, active }) => (
  <div className={active.has("Profile") ? "active" : ""}>
    <button className="trigger-dropdown" onClick={() => onClick("Profile")}>
      <i className="fa fa-user" />
    </button>
  </div>
);

export default Profile;
