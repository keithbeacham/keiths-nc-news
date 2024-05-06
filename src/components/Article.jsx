function Article({ article }) {
  return (
    <li key={article.article_id} className="article-item">
      <p className="article-topic">{article.topic}</p>
      <h2 className="article-title">{article.title}</h2>
      <img className="article-image" src={article.article_img_url} />
      <p className="article-text">by {article.author}</p>
    </li>
  );
}

export default Article;
