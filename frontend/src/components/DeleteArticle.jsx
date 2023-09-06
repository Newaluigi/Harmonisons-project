import { useState, useEffect } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
// import { FaInfoCircle } from "react-icons/fa"

export default function DeleteArticle() {
  const [articles, setArticles] = useState([])
  const [selectedArticles, setSelectedArticles] = useState([])
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [deleteSuccess, setDeleteSuccess] = useState(false)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:4242/articles")
        setArticles(response.data)
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error)
      }
    }

    fetchArticles()
  }, [])

  const handleDelete = async () => {
    try {
      await Promise.all(
        selectedArticles.map(async (id) => {
          try {
            const response = await fetch(
              `${import.meta.env.VITE_BACKEND_URL}/articles/${id}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            if (!response.ok) {
              throw new Error("Network response was not ok")
            }
          } catch (error) {
            console.error("Erreur lors de la suppression d'un article:", error)
          }
        })
      )

      setArticles(
        articles.filter((article) => !selectedArticles.includes(article.id))
      )
      setSelectedArticles([])
      setDeleteSuccess(true)
      toast.success("L'article a bien été suprimé!", {
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
        setDeleteSuccess(false)
      }, 3000)
      setShowConfirmation(false)
    } catch (error) {
      console.error("Erreur lors de la suppression des articles:", error)
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

  return (
    <div className="deleteArticle">
      <h2 className="cardTitle">
        Supprimer des articles
        {/* <FaInfoCircle
          size={16}
          title="Vous pouvez ici supprimer définitivement un ou plusieurs articles publiés."
        /> */}
      </h2>
      <div>
        {articles.map((article) => (
          <div className="divList" key={article.id}>
            <input
              type="checkbox"
              checked={selectedArticles.includes(article.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedArticles([...selectedArticles, article.id])
                } else {
                  setSelectedArticles(
                    selectedArticles.filter((id) => id !== article.id)
                  )
                }
              }}
            />
            <span>
              {new Date(article.dateArticle).toLocaleDateString("fr-FR")}
              &nbsp;-&nbsp;<strong>{article.titleArticle}</strong>
            </span>
          </div>
        ))}
      </div>
      <div className="containButton">
        <button
          className="genericButton"
          type="submit"
          onClick={() => setShowConfirmation(true)}
        >
          Supprimer ces articles
        </button>
      </div>
      {showConfirmation && (
        <div className="containButton confirmation-message">
          <p>
            Êtes-vous sûr de vouloir supprimer définitivement les articles
            sélectionnés ?
          </p>
          {/* Appel de la fonction handleDelete */}
          <button
            className="genericButton"
            type="submit"
            onClick={handleDelete}
          >
            Confirmer
          </button>
          <button
            className="genericButton"
            type="submit"
            onClick={() => setShowConfirmation(false)}
          >
            Annuler
          </button>
        </div>
      )}
      {deleteSuccess && (
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
