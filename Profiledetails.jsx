import React from 'react';
import './profiledetails.css';

const Profiledetails = ({ profile, onClose }) => {
    return (
        <div className="profile-details">
            <button className="close-button" onClick={onClose}>&times;</button>
            <h2>Profile</h2>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Contact Number:</strong> {profile.contactNumber}</p>
            <p><strong>Registered Events:</strong> {profile.registeredEvents.length}</p>
        </div>
    );
};

export default Profiledetails;
