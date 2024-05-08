import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="header-container">
      {user ? (
        <button className="header-profile-button" key="profile">
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "white" }}
          >
            profile
          </Link>
        </button>
      ) : (
        <button className="header-login-button" key="login">
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            login
          </Link>
        </button>
      )}
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
