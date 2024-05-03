import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ArticleList from "./components/ArticleList";
import Topics from "./components/Topics";
import Profile from "./components/Profile";

function App() {
  const [username, setUsername] = useState("");
  const [topic, setTopic] = useState("");

  return (
    <>
      {username ? (
        <>
          <Header />
          <Routes>
            <Route path="/articles" element={<ArticleList topic={topic} />} />
            <Route path="/profile" element={<Profile username={username} />} />
            <Route path="/topics" element={<Topics />} />
          </Routes>
        </>
      ) : (
        <Welcome setUsername={setUsername} />
      )}
    </>
  );
}

export default App;
