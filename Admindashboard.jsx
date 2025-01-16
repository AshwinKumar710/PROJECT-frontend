/*import React from "react";

const Admindashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Manage events and users.</p>
    </div>
  );
};

export default Admindashboard;*/
/*import React from "react";
import './Admindashboard.css';

const Admindashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <p>Manage events and users.</p>
    </div>
  );
};

export default Admindashboard;*/
import React, { useState } from "react";
import './Admindashboard.css';

const Admindashboard = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    console.log("Close button clicked");
  };

  return (
    isVisible && (
      <div className="admin-dashboard-container">
        <button className="close-button" onClick={handleClose}>&times;</button>
        <h2>Admin Dashboard</h2>
        <p>Manage events and users.</p>
      </div>
    )
  );
};

export default Admindashboard;

