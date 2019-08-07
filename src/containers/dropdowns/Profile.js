import React from "react";

const Profile = ({ onClick, active }) => (
  <div
    onClick={() => onClick('Profile')}
    className={active.has('Profile') ? 'active' : ''}
  >
    Profile
  </div>
);

export default Profile;
