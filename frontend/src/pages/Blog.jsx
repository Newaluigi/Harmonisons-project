import React, { useState, useEffect } from "react"
import { usePageTitle } from "../components/PageTitleContext"
import Article from "../components/Article"
import axios from "axios"

export default function ArticlesDisplay() {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Blog")
  }, [])

  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:4242/articles")
        setArticles(response.data)
      } catch (error) {
        console.error("Impossible d'afficher les articles", error)
      }
    }
    fetchArticles()
  }, [])

  return (
    <div className="Blog">
      ici le blog
      <div className="divFlexArticles">
        {articles.map((article) => (
          <Article
            key={article.id}
            id={article.id}
            dateArticle={article.dateArticle}
            titleArticle={article.titleArticle}
            textArticle={article.textArticle}
            urlImg={article.urlImg}
          />
        ))}
      </div>
    </div>
  )
}
