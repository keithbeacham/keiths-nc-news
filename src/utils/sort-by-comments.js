export function sortByComments(sortOrder, articlesToSort) {
  const sortedArticles = [...articlesToSort];
  if (sortOrder === "DESC") {
    sortedArticles.sort((a, b) => {
      return b.comment_count - a.comment_count;
    });
  } else {
    sortedArticles.sort((a, b) => {
      return a.comment_count - b.comment_count;
    });
  }
  return sortedArticles;
}
