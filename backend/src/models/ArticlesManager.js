const AbstractManager = require("./AbstractManager")

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "articles" })
  }

  findPublishedArticles() {
    return this.database.query(
      `select articles.id, articles.dateArticle, articles.titleArticle, articles.textArticle, articles.urlImg, articles.archived 
      FROM ${this.table}
      WHERE articles.archived = 0
      ORDER BY articles.dateArticle DESC`
    )
  }

  findArchivedArticles() {
    return this.database.query(
      `select articles.id, articles.dateArticle, articles.titleArticle, articles.textArticle, articles.urlImg, articles.archived
      FROM ${this.table}
      WHERE articles.archived = 1
      ORDER BY articles.dateArticle DESC`
    )
  }

  findArticles(id) {
    return this.database.query(
      `select articles.id, articles.dateArticle, articles.titleArticle, articles.textArticle, articles.urlImg, articles.archived 
      FROM ${this.table}
      WHERE articles.id = ?`,
      [id]
    )
  }

  insertArticles(article) {
    return this.database.query(
      `insert into ${this.table} (titleArticle, dateArticle, textArticle, urlImg, archived) values (?, ?, ?, ?, ?)`,
      [
        article.titleArticle,
        article.dateArticle,
        article.textArticle,
        article.urlImg,
        article.archived,
      ]
    )
  }

  updateArticles(article) {
    return this.database.query(
      `update ${this.table} set titleArticle = ?, dateArticle = ?, textArticle = ?, urlImg = ?, archived = ?
      where id = ?`,
      [
        article.titleArticle,
        article.dateArticle,
        article.textArticle,
        article.urlImg,
        article.archived,
        article.id,
      ]
    )
  }
}

module.exports = ArticleManager
