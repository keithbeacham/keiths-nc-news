function ArticleItem({ article }) {
  return (
    <li className="article-item">
      <p className="article-topic">{article.topic}</p>
      <h2 className="article-title" id={article.article_id}>
        {article.title}
      </h2>
      <p className="article-text">by {article.author}</p>
      <img
        className="article-image"
        id={article.article_id}
        src={article.article_img_url}
      />
      {article.body ? <p className="article-body">{article.body}</p> : null}
    </li>
  );
}

export default ArticleItem;
