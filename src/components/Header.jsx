import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <button className="header-button" key="profile">
        <Link to="/profile">profile</Link>
      </button>
      <button className="header-button" key="home">
        <Link to="/articles">home</Link>
      </button>
      <button className="header-button" key="topics">
        <Link to="/topics">topics</Link>
      </button>
    </div>
  );
}

export default Header;
