/*import React from "react";
import { useParams } from "react-router-dom";
import './Eventdetails.css';
const Eventdetails = () => {
  const { id } = useParams();


  return (
    <div>
      <h2>Event Details (ID: {id})</h2>
      <p>Details about the selected event.</p>
    </div>
  );
};

export default Eventdetails;*/
import React from "react";
import { useParams } from "react-router-dom";
import "./Eventdetails.css"; // Import the CSS file

const Eventdetails = () => {
  const { id } = useParams();

  return (
    <div className="event-details">
      <h2>Event Details (ID: {id})</h2>
      <p>Details about the selected event.</p>
    </div>
  );
};

export default Eventdetails;

