import { forwardRef, useImperativeHandle, useState } from 'react';
import './index.scss';
import SearchBar from './SearchBar';

export const SideBar = forwardRef((_, ref) => {
  const [drawShow, setDrawShow] = useState(false);

  useImperativeHandle(ref, () => ({
    changeDrawShow: () => {
      setDrawShow(true);
    },
  }));
  const closeDraw = (e: any) => {
    e.stopPropagation();
    setDrawShow(false);
  };
  return (
    <div className="drawer">
      {/* <!-- 遮罩层 --> */}
      {drawShow && <div className="mask-show" onClick={closeDraw}></div>}
      {/* <!-- 抽屉层 --> */}
      <div className={`setbox ${drawShow ? 'show' : ''}`}>
        <div className="header">
          <p className="fl">Search</p>
          <SearchBar />
          <button className="off" onClick={closeDraw}>
            关闭
          </button>
        </div>
      </div>
    </div>
  );
});
