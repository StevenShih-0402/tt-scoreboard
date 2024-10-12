import React from 'react';
import homeBackground from '../assets/images/bkg.jpg';

const Home = ({ onSingleGameClick }) => {
  return (
    <div className="background" style={{ backgroundImage: `url(${homeBackground})` }}>
      <div className="login-button">
        <button>登入</button>
      </div>

      <div className="content">
        <h1>TABLE TENNIS SCOREBOARD</h1>
        <p>Quick counting, Quick racing, Enjoy speed and spin with ease.</p>

        <div className="menu">
          <button onClick={onSingleGameClick}>單打</button>
          <button>雙打</button>
          <button>團體賽</button>
          <button>註冊帳號</button>
        </div>

        <div className="footer">
          <p>TOGETHER, WE CAN MAKE A DIFFERENCE.</p>
          <p>Creater: Steven SHIH</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
