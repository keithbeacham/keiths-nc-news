import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/User";

function Login() {
  const { setUser } = useContext(UserContext);
  const username = "grumpy19";
  const location = useLocation();
  let previous = "";

  if (location.state) {
    previous = location.state.previous;
  }

  return (
    <div className="login-page">
      <p className="login-title">Welcome to NC News</p>
      <button className="login-button" onClick={() => setUser(username)}>
        {previous ? (
          <Link
            to={previous}
            style={{ textDecoration: "none" }}
            state={{ previous }}
          >
            login as {username}
          </Link>
        ) : (
          <Link to="/articles" style={{ textDecoration: "none" }}>
            login as {username}
          </Link>
        )}
      </button>
    </div>
  );
}

export default Login;
