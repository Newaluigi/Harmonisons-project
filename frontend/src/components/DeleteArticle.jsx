import { useState, useEffect } from "react"
// import axios from "axios";
import { FaInfoCircle } from "react-icons/fa"
// import createApiService from "../../services/RequestApi"

export default function DeleteArticle() {
  const [articles, setArticles] = useState([]) // stocke la liste des articles récupérés à partir de l'API
  const [selectedArticles, setSelectedArticles] = useState([]) // stocke les articles sélectionnés pour la suppression
  const [showConfirmation, setShowConfirmation] = useState(false) // booléen qui détermine si le message de confirmation de suppression doit être affiché ou non
  const [deleteSuccess, setDeleteSuccess] = useState(false) // booléen qui indique si la suppression a été effectuée avec succès ou non
  //   const apiService = createApiService()

  // requête asynchrone lors du montage initial du composant,
  // récupère la liste des articles et met à jour l'état du state "articles"
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/articles`
        )
        setArticles(response.data)
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error)
      }
    }

    fetchArticles()
  }, [])

  // gérer la suppression des articles sélectionnés
  // une requête DELETE est envoyée pour chaque article sélectionné
  // en utilisant "Promise.all" pour exécuter toutes les requêtes en parallèle
  // puis l'état "articles" est mis à jour en supprimant tous les articles sélectionnés,
  // puis l'état "selectedArticles" est réinitialisé
  // et l'état "deleteSuccess" est mis à jour pour afficher un message de confirmation
  const handleDelete = async () => {
    try {
      await Promise.all(
        selectedArticles.map((id) =>
          apiService.delete(
            `${import.meta.env.VITE_BACKEND_URL}/articles/${id}`
          )
        )
      )
      setArticles(
        articles.filter((article) => !selectedArticles.includes(article.id))
      )
      setSelectedArticles([])
      setDeleteSuccess(true)
      setTimeout(() => {
        setDeleteSuccess(false) // Réinitialise submitSuccess après un délai de 3 secondes
      }, 3000)
      setShowConfirmation(false)
    } catch (error) {
      console.error("Erreur lors de la suppression des articles:", error)
    }
  }

  return (
    <div className="adminPage">
      <h3>
        Supprimer des articles&#x20;
        <FaInfoCircle
          size={16}
          title="Vous pouvez ici supprimer définitivement un ou plusieurs articles publiés."
        />
      </h3>
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
            {/* <span>
              {new Date(article.dateArticle).toLocaleDateString("fr-FR")}
              &nbsp;-&nbsp;<strong>{article.titleArticle}</strong>&nbsp;-&nbsp;
              <em>Thème : {article.themesArticleName}</em>
            </span> */}
          </div>
        ))}
      </div>
      <div className="containButton">
        <button
          className="addButton"
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
          <button className="suppButton" type="submit" onClick={handleDelete}>
            Confirmer
          </button>
          <button
            className="annulButton"
            type="submit"
            onClick={() => setShowConfirmation(false)}
          >
            Annuler
          </button>
        </div>
      )}
      {deleteSuccess && (
        <p className="success-message">
          Les articles sélectionnés ont été supprimés avec succès.
        </p>
      )}
    </div>
  )
}
