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
      `insert into ${this.table} ( titleArticle, textArticle, urlImg, archived) values (?, ?, ?, ?)`,
      [
        article.titleArticle,
        article.textArticle,
        article.urlImg,
        article.archived,
      ]
    )
  }

  addArticle(article) {
    return this.database
      .query(
        `insert into ${this.table} (titleArticle, textArticle, urlImg, archived) values (?, ?, ?, ?)`,
        [
          article.titleArticle,
          article.textArticle,
          article.urlImg,
          article.archived,
        ]
      )
      .then(([result]) => {
        return { id: result.insertId }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  updateArticles(article) {
    return this.database.query(
      `update ${this.table} set titleArticle = ?, textArticle = ?, urlImg = ?, archived = ?
      where id = ?`,
      [
        article.titleArticle,
        article.textArticle,
        article.urlImg,
        article.archived,
        article.id,
      ]
    )
  }
}

module.exports = ArticleManager
