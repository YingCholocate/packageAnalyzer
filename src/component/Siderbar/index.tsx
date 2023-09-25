import { useState } from 'react';
import './index.scss';

export default function SideBar() {
  const [drawShow, setDrawShow] = useState(false);
  const closeDraw = () => {
    setDrawShow(false);
  };
  return (
    <div className="drawer">
      {/* <!-- 遮罩层 --> */}
      {drawShow && <div className="mask-show" onClick={closeDraw}></div>}
      {/* <!-- 抽屉层 --> */}
      <div className={`setbox ${drawShow ? 'show' : ''}`}>
        <div className="header">
          <p className="fl">即时聊天</p>
          <button className="off" onClick={closeDraw}>
            关闭
          </button>
        </div>
      </div>
    </div>
  );
}
