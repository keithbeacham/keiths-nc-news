import { useEffect, useState } from "react";
import { getAllArticles } from "../api/api";

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
      <h1>List of Articles</h1>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h2>{article.title}</h2>
              <img src={article.article_img_url} />
              <p>author: {article.author}</p>
              <p>topic: {article.topic}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArticleList;
