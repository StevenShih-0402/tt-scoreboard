import React from 'react';
import singleFormBackground from '../assets/images/bkg.jpg';

const SingleForm = () => {
  return (
    <div className="background" style={{ backgroundImage: `url(${singleFormBackground})` }}>
      <div className="single-form-content">
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
  );
};

export default SingleForm;
