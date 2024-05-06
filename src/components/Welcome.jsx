import { Link } from "react-router-dom";

function Welcome({ setUsername }) {
  return (
    <div className="welcome-page">
      <p className="welcome-title">Welcome to NC News</p>
      <button
        className="welcome-button"
        onClick={() => setUsername("grumpy19")}
      >
        <Link to="/articles">articles</Link>
      </button>
    </div>
  );
}

export default Welcome;
