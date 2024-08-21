import React from 'react';
import './App.css';
import usericon from './image/user_icon.png';
import networkicon from './image/network_icon.svg';
import phoneicon from './image/phone_icon.svg';
import mailicon from './image/mail_icon.png';

function App() {
  return (
    <div className="full-page">
      <div className="element-wrapper">
        <div className="title">Personal Info</div>
        <div className="box">
          <div className="data-line">
            <img src={usericon} className="icon-style"></img>
            <div className="data-line-wrapper">
              <div className="data-line-info">Username</div>
              <div className="data-line-output">superadmin</div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="data-line">
            <img src={networkicon} className="icon-style"></img>
            <div className="data-line-wrapper">
              <div className="data-line-info">Role</div>
              <div className="data-line-output">Admin</div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="data-line">
            <img src={phoneicon} className="icon-style"></img>
            <div className="data-line-wrapper">
              <div className="data-line-info">Phone Number</div>
              <div className="data-line-output">+971525450837</div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="data-line">
            <img src={mailicon} className="icon-style"></img>
            <div className="data-line-wrapper">
              <div className="data-line-info">Email</div>
              <div className="data-line-output">superadmin@sa.intech</div>
            </div>
          </div>
          <div className="divider"></div>
          {/* <div className="bottom-fullwidth-button"> */}
          <button className="bottom-button">Log Out</button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
