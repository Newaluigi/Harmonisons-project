import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"

export default function UpdateArticle() {
  const [articles, setArticles] = useState([])
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [dateArticle, setDateArticle] = useState("")
  const [titleArticle, setTitleArticle] = useState("")
  const [textArticle, setTextArticle] = useState("")
  const [pictureArticle, setPictureArticle] = useState("")
  const [archived, setArchived] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/articles`
        )
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        setArticles(data)
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error)
      }
    }

    fetchArticles()
  }, [])

  const handleArticleSelection = (article) => {
    setSelectedArticle(article)
    setDateArticle(new Date(article.dateArticle).toISOString().substr(0, 10)) // formatage de la date
    setTitleArticle(article.titleArticle)
    setTextArticle(article.textArticle)
    setPictureArticle(article.urlImg)
    setArchived(article.archived === 1)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedArticle) return

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/articles/${selectedArticle.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dateArticle,
            titleArticle,
            textArticle,
            urlImg: pictureArticle,
            archived: archived ? 1 : 0,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      // Update the local state
      setArticles((prevArticles) =>
        prevArticles.map((article) =>
          article.id === selectedArticle.id
            ? {
                ...article,
                dateArticle,
                titleArticle,
                textArticle,
                urlImg: pictureArticle,
                archived: archived ? 1 : 0,
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
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'article:", error)
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
    console.info("archived :", archived)
  }

  const handleFileChange = (e) => {
    if (e.target.files.length === 1) {
      setPictureArticle(e.target.files[0])
      setPictureArticle(URL.createObjectURL(e.target.files[0]))
    } else {
      setPictureArticle(null)
    }
  }

  return (
    <div className="editArticle">
      <form onSubmit={handleSubmit}>
        <h2 className="cardTitle">Modification des articles</h2>
        <label htmlFor="Article-selection">Sélectionner un article :</label>
        <select
          id="Article-selection"
          value={selectedArticle?.id || ""}
          onChange={(e) => {
            const foundArticle = articles.find(
              (article) => article.id === Number(e.target.value)
            )
            if (foundArticle) {
              handleArticleSelection(foundArticle)
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
          <>
            <br />
            <label htmlFor="dateArticle">Date de l'article :</label>
            <br />
            <input
              id="dateArticle"
              type="date"
              value={dateArticle}
              onChange={(e) => setDateArticle(e.target.value)}
            />
            <br />
            <label htmlFor="titleArticle">Titre de l'article :</label>
            <br />
            <input
              id="titleArticle"
              value={titleArticle}
              onChange={(e) => setTitleArticle(e.target.value)}
            />
            <div>
              <label htmlFor="textArticle">Texte :</label>
              <textarea
                id="textArticle"
                value={textArticle}
                onChange={(e) => setTextArticle(e.target.value)}
              ></textarea>
            </div>
            <br />
            {/* <img
              className="previewImage"
              src={pictureArticle}
              alt="illustration de l'article"
              style={{ display: pictureArticle ? "block" : "none" }}
            /> */}
            <br />
            <label htmlFor="fileUploader">
              Télécharger une nouvelle image :
            </label>
            <div className="image">
              <label className="label" htmlFor="urlImg">
                Image:
              </label>
              {pictureArticle && (
                <img
                  className="photoArticle"
                  src={pictureArticle}
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
                value={pictureArticle}
              />
            </div>
            <br />
            <label htmlFor="archivedArticle">Archivé :</label>
            <input
              id="archivedArticle"
              type="checkbox"
              checked={archived}
              onChange={(e) => setArchived(e.target.checked)}
            />
          </>
        )}
        <div className="containButton">
          <button className="genericButton" type="submit">
            Mettre à jour l'article
          </button>
        </div>
      </form>
      {submitSuccess && (
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
      )}
    </div>
  )
}
