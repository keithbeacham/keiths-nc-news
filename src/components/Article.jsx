function Article({ article }) {
  return (
    <li key={article.article_id} className="article-item">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} />
      <p>author: {article.author}</p>
      <p>topic: {article.topic}</p>
    </li>
  );
}

export default Article;
