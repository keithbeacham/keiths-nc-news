import { useEffect, useState } from "react";
import { getAllArticles } from "../api/api";
import Article from "./Article";

function ArticleList({ topic }) {
  const [isError, setIsError] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles(topic)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .then(() => {
        console.log(articles);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  return (
    <>
      <h1>Articles on {topic ? topic : "everything"}</h1>
      <ul className="article-list">
        {articles.map((article) => {
          return <Article article={article} />;
        })}
      </ul>
    </>
  );
}

export default ArticleList;
