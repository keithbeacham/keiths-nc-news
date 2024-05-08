function ArticleHeader({ article }) {
  return (
    <>
      <div className="article-topic">{article.topic}</div>
      <h2 className="article-title" id={article.article_id}>
        {article.title}
      </h2>
      <p className="article-text">by {article.author}</p>
      <img
        className="article-image"
        id={article.article_id}
        src={article.article_img_url}
      />
    </>
  );
}

export default ArticleHeader;
