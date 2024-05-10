import { useEffect, useState } from "react";
import { getAllArticles } from "../api/api";
import { Link } from "react-router-dom";

function TopicItem({ topic }) {
  const [articleCount, setArticleCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getAllArticles(topic.slug)
      .then((response) => {
        setArticles(response.data.articles);
        setArticleCount(response.data.total_count);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="topic-item">
      <Link
        to={`/articles/${topic.slug}`}
        style={{ textDecoration: "none", color: "black" }}
        className="topic-item-header"
      >
        <h2 className="topic-slug">{topic.slug}</h2>
        <p className="topic-description">{topic.description}</p>
      </Link>
      {isLoading ? (
        <p style={{ fontSize: "large", padding: "10px" }}>
          loading article data...
        </p>
      ) : isError ? (
        <p style={{ fontSize: "large", padding: "10px" }}>
          Oops an error has occurred, please try again
        </p>
      ) : (
        <>
          <h3 className="topic-article-count">{articleCount} articles:</h3>
          <ul className="topic-articles-box">
            {articles.map((article) => {
              return (
                <Link
                  to={`/article/${article.article_id}`}
                  style={{ textDecoration: "none", color: "black" }}
                  key={`Link to /article/${article.article_id}`}
                >
                  <li
                    className="topic-article-title"
                    key={`article/${article.article_id}`}
                  >
                    {article.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </>
      )}
      <Link
        to={`/articles/${topic.slug}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <button className="topic-button">select</button>
      </Link>
    </div>
  );
}
export default TopicItem;
