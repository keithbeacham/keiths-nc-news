import { Link } from "react-router-dom";

function Welcome({ setUsername }) {
  return (
    <>
      <h1>Welcome Page</h1>
      <button onClick={() => setUsername("grumpy19")}>
        <Link to="/articles">articles</Link>
      </button>
    </>
  );
}

export default Welcome;
