import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import ArticleList from "./components/ArticleList";
import Topics from "./components/Topics";
import Profile from "./components/Profile";
import Article from "./components/Article";
import { UserProvider } from "./contexts/User";
import PageNotFound from "./components/Error";

function App() {
  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:topic" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
