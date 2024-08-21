import React from 'react';
import './App.css';
// import redicon from './image/red-circle.png';

function App() {
  return (
    <div className="full-page">
      <div className="element-wrapper">
        <div className="title">Personal Info</div>
        <div className="box">
          <div>
            <img></img>
            <div>Username</div>
            <div>superadmin</div>
          </div>
          <div className="divider"></div>
          <div>
            <img></img>
            <div>Role</div>
            <div>Admin</div>
          </div>
          <div className="divider"></div>
          <div>
            <img></img>
            <div>Phone Number</div>
            <div>+971525450937</div>
          </div>
          <div className="divider"></div>
          <div>
            <img></img>
            <div>Email</div>
            <div>superadmin@sa.intech</div>
          </div>
          <div className="divider"></div>
          <div>
            <button>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
