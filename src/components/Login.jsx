import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { SourceContext } from "../contexts/Source";

function Login() {
  const { setUser } = useContext(UserContext);
  const { source, setSource } = useContext(SourceContext);
  const username = "grumpy19";

  return (
    <div className="login-page">
      <p className="login-title">Welcome to NC News</p>
      <button className="login-button" onClick={() => setUser(username)}>
        {source ? (
          <Link to={source} style={{ textDecoration: "none" }}>
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
