/*import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  const events = [
    { id: 1, title: "Event 1", date: "2025-01-01" },
    { id: 2, title: "Event 2", date: "2025-02-01" },
  ];

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>
              {event.title} - {event.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;*/
/*import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const eventitle=  [
    { id: 1, title:'Event 1', date: '2025-01-01' },
    { id: 2, title: 'Event 2', date: '2025-02-01' },
  ];

  return (
    <div className="home-container">
      <div className="sidebar">
        <sidebar />
      </div>

      <div className="content">
        <div className="content-text">
          <h2>Upcoming Events</h2>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <Link to={`/event/${event.id}`}>
                  {event.title} - {event.date}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;*/
import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import './Home.css';

  const events=  [
    { id: 1, title:'Event 1', date: '2025-01-01' },
    { id: 2, title: 'Event 2', date: '2025-02-01' },
  ];

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <img src="https://i.pinimg.com/736x/4d/6b/31/4d6b31c50709482f3bc1f95e9531844b.jpg" alt="Logo Icon" className="logo" /> {/* Add your logo icon */}
      </div>

      <div className="buttons">
        <button className="button">
        <Link to="/login" className="button">
          <img src="https://www.freeiconspng.com/uploads/login-button-png-13.png" alt="Login Icon" /> Login {/* Add your login icon */}
        </Link>
        </button>
        <button className="button">
        <Link to="/signup" className="button">
          <img src="https://www.freeiconspng.com/thumbs/sign-up-button-png/blue-sign-up-button-png-0.png" alt="Signup Icon" /> Signup {/* Add your signup icon */}
        </Link>
        </button>
        <button className="button">
        <Link to="/profile" className="button">
          <img src="https://cdn-icons-png.flaticon.com/512/4122/4122901.png" alt="Profile Icon" /> Profile {/* Add your profile icon */}
        </Link>
        </button>
      </div>

      <div className="content">
        <div className="content-text">
        <h2>Upcoming Events</h2>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <Link to={`/event/${event.id}`}>
                  {event.title} - {event.date}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;

