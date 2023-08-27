import React from "react"

export default function NotFound() {
  const goBack = () => {
    window.history.back() // Cette ligne renvoie l'utilisateur à la page précédente dans l'historique
  }

  return (
    <div className="NotFound">
      <div className="NotFoundContent">
        <h1>Oops, cette page n'existe pas</h1>
        <p>
          Il semblerait que vous ayez atteint une page qui n'existe pas.
          Peut-être avez-vous suivi un lien incorrect ou tapé une URL erronée.
        </p>
        <button className="genericButton">
          <a onClick={goBack} style={{ cursor: "pointer" }}>
            Page précédente
          </a>
        </button>
      </div>
    </div>
  )
}
