import { useEffect, useState } from "react";
import { getAllArticles } from "../api/api";
import { Link, useParams } from "react-router-dom";
import ArticleHeader from "./ArticleHeader";

function ArticleList() {
  const [isError, setIsError] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getAllArticles(topic)
      .then((response) => {
        setArticles(response.data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="article-list-title">
        Articles on {topic ? topic : "everything"}
      </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Oops - something has gone wrong !</p>
      ) : (
        <ul className="article-list">
          {articles.map((article) => {
            return (
              <Link
                to={`/article/${article.article_id}`}
                style={{ textDecoration: "none", color: "black" }}
                key={article.article_id}
                className="article-item"
              >
                <li>
                  <ArticleHeader article={article} />
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ArticleList;
