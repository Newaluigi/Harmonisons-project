import React, { useState, useEffect } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditArticle = () => {
  const [articles, setArticles] = useState([])
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [titleArticle, settitleArticle] = useState("")
  const [textArticle, setTextArticle] = useState("")
  const [urlImg, setPictureArticle] = useState(null)
  const [archived, setArchivedArticle] = useState(0)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:4242/articles")
        setArticles(response.data)
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error)
        toast.error("Une erreur est survenue... Merci de réessayer", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
    }

    fetchArticles()
  }, [])
  const handleArticleSelection = (article) => {
    setSelectedArticle(article)

    settitleArticle(article.titleArticle)
    setTextArticle(article.textArticle)
    setPictureArticle(article.urlImg)
    setImageUrl(import.meta.env.VITE_BACKEND_URL + article.urlImg)
    setArchivedArticle(article.archived)
    setSubmitSuccess(false)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (selectedArticle) {
      const formData = new FormData()
      formData.append("name_theme", titleArticle)
      formData.append("textArticle", textArticle)
      if (urlImg instanceof File) {
        formData.append("urlImg", urlImg)
      } else {
        formData.append("existing_urlImg", urlImg)
      }
      formData.append("archived", archived)
      try {
        await axios.put(
          `http://localhost:4242/articles/${selectedArticle.id}`,
          formData,
          {}
        )

        // Mettre à jour les thèmes localement
        setArticles(
          articles.map((article) =>
            article.id === selectedArticle.id
              ? {
                  ...article,
                  titleArticle,
                  textArticle,
                  urlImg,
                  archived,
                }
              : article
          )
        )
        setSubmitSuccess(true)
        toast.success("L'article a bien été modifié!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      } catch (error) {
        console.error("Erreur lors de la modification de l'article:", error)
        toast.error(
          "Erreur lors de la modification de l'article... Merci de réessayer",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        )
      }
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files.length === 1) {
      setPictureArticle(e.target.files[0])
      setImageUrl(URL.createObjectURL(e.target.files[0]))
    } else {
      setPictureArticle(null)
    }
  }

  return (
    <div className="editArticle">
      <form className="interieurCadre">
        <h2 className="cardTitle">Modifier un article</h2>
        <label className="label" htmlFor="article-selection">
          Sélectionner un article:
        </label>
        <select
          id="article-selection"
          value={selectedArticle?.id || ""}
          onChange={(e) => {
            const article = articles.find(
              (article) => article.id === Number(e.target.value)
            )
            if (article) {
              handleArticleSelection(article)
            }
          }}
        >
          <option value="">Choisir un article</option>
          {articles.map((article) => (
            <option key={article.id} value={article.id}>
              {article.titleArticle}
            </option>
          ))}
        </select>

        {selectedArticle && (
          <form onSubmit={handleSubmit} className="interieurCadreSecond">
            <label className="label" htmlFor="titleArticle">
              Titre de l'article:
            </label>
            <input
              type="text"
              id="titleArticle"
              value={titleArticle}
              onChange={(e) => settitleArticle(e.target.value)}
            />
            <br />
            <div className="descript">
              <label className="label" htmlFor="textArticle">
                Contenu de l'article:
              </label>
              <br />
              <textarea
                className="textArticleArea"
                id="textArticle"
                value={textArticle}
                onChange={(e) => setTextArticle(e.target.value)}
              ></textarea>
              <br />
            </div>
            <div className="image">
              <label className="label" htmlFor="urlImg">
                Image:
              </label>
              {imageUrl && (
                <img
                  className="photoArticle"
                  src={imageUrl}
                  alt="Aperçu"
                  width="150"
                />
              )}
              <input
                type="file"
                id="urlImg"
                accept="image/*"
                onChange={handleFileChange}
              />
              <input
                type="hidden"
                id="existing_picture_article"
                value={urlImg}
              />
            </div>
            <br />

            <label className="label" htmlFor="archived">
              Archiver l'article:
            </label>
            <select
              id="archived"
              value={archived}
              onChange={(e) => setArchivedArticle(Number(e.target.value))}
            >
              <option value={0}>Non</option>
              <option value={1}>Oui</option>
            </select>
            <br />

            <button className="genericButton" type="submit">
              {submitSuccess ? "Modifié!" : "Modifier l'article"}
            </button>
          </form>
        )}
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default EditArticle
