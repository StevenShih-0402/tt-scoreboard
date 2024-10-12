import React, { useState } from 'react';
import './App.css';
import homeBackground from './assets/images/bkg.jpg'; // 首頁背景
import singleGameBackground from './assets/images/bkg.jpg'; // 單打頁面的背景

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 管理當前頁面狀態

  // 切換到單打頁面
  const handleSingleGameClick = () => {
    setCurrentPage('singleGame');
  };

  return (
    <div className="app">
      {currentPage === 'home' && (
        <div className="background" style={{ backgroundImage: `url(${homeBackground})` }}>
          <div className="login-button">
            <button>登入</button>
          </div>

          <div className="content">
            <h1>TABLE TENNIS SCOREBOARD</h1>
            <p>Quick counting, Quick racing, Enjoy speed and spin with ease.</p>

            <div className="menu">
              <button onClick={handleSingleGameClick}>單打</button>
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
      )}

      {currentPage === 'singleGame' && (
        <div className="background" style={{ backgroundImage: `url(${singleGameBackground})` }}>
          <div className="single-game-content">
            <h1>單打賽事資訊 - Game1</h1>
            <form>
              {/* 賽事名稱 */}
              <div className="form-group">
                <label>賽事名稱</label>
                <input type="text" value="Game1" readOnly />
              </div>

              {/* 賽制 */}
              <div className="form-group">
                <label>賽制</label>
                <label><input type="radio" name="format" /> BO3(3戰2勝)</label>
                <label><input type="radio" name="format" /> BO5(5戰3勝)</label>
                <label><input type="radio" name="format" /> BO7(7戰4勝)</label>
              </div>

              {/* 分數 */}
              <div className="form-group">
                <label>分數</label>
                <label><input type="radio" name="score" /> 11分</label>
                <label><input type="radio" name="score" /> 21分</label>
              </div>

              {/* 選手1 */}
              <div className="form-group">
                <label>選手1</label>
                <input type="text" value="選手1" />
              </div>

              {/* 選手1顏色 */}
              <div className="form-group">
                <label>顏色</label>
                <select>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                </select>
              </div>

              {/* 選手2 */}
              <div className="form-group">
                <label>選手2</label>
                <input type="text" value="選手2" />
              </div>

              {/* 選手2顏色 */}
              <div className="form-group">
                <label>顏色</label>
                <select>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                </select>
              </div>

              {/* 開始按鈕 */}
              <button type="submit">Game Start!</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
