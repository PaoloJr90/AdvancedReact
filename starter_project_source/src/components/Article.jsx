function Article({ myArticleInfo }) {
  return (
    <article className="article-section">
      <h2>{myArticleInfo?.title}</h2>
      <p>{myArticleInfo?.description}</p>
    </article>
  );
}

export default Article;
