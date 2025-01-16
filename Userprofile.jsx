import React, { useState } from "react";
import './Userprofile.css';

const Userprofile = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="user-profile">
      <button className="close-button" onClick={handleClose}>×</button>
      <h2>User Profile</h2>
      <p>Name: Aswin vs</p>
      <p>Email: aswin.vs@example.com</p>
      <p>Registered Events: 3</p>
    </div>
  );
};

export default Userprofile;

