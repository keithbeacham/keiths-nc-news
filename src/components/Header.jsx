import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <button className="header-button" key="profile">
        <Link to="/profile" style={{ textDecoration: "none" }}>
          profile
        </Link>
      </button>
      <button className="header-button" key="home">
        <Link to="/articles" style={{ textDecoration: "none" }}>
          articles
        </Link>
      </button>
      <button className="header-button" key="topics">
        <Link to="/topics" style={{ textDecoration: "none" }}>
          topics
        </Link>
      </button>
    </div>
  );
}

export default Header;
