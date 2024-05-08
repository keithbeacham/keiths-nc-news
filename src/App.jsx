import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import ArticleList from "./components/ArticleList";
import Topics from "./components/Topics";
import Profile from "./components/Profile";
import Article from "./components/Article";
import { UserProvider } from "./contexts/User";
import { SourceProvider } from "./contexts/Source";

function App() {
  const [topic, setTopic] = useState("");

  return (
    <UserProvider>
      <SourceProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList topic={topic} />} />
          <Route path="/articles" element={<ArticleList topic={topic} />} />
          <Route path="/article/:article_id" element={<Article />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </SourceProvider>
    </UserProvider>
  );
}

export default App;
