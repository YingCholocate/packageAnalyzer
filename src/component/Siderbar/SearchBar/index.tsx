import './index.scss';
export default function SearchBar() {
  // 模糊查询
  return (
    <div className="searchContainer">
      <input className="input" placeholder="find module"></input>
      <div className="searchBarList"></div>
    </div>
  );
}
