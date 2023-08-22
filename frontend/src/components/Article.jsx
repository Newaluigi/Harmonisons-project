import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import defaultImage from "../assets/Photos/Formation.jpg"

// Fonction utilitaire pour formater une date au format "jour mois année"
function formatDate(dateString) {
  const date = new Date(dateString)
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  })
  return formatter.format(date)
}

// Fonction utilitaire pour remplacer les sauts de ligne par des balises <br> dans le texte
// function newlineToBreak(text) {
//   return text.replace(/\n/g, "<br />")
// }

export default function ArticleCard({
  id,
  titleArticle,
  dateArticle,
  textArticle,
  urlImg,
}) {
  console.info(id) // Utile pour les tests fonctionnels

  // Fonction pour tronquer le texte si nécessaire
  // function truncateText(text, maxLength = 200, replacementText = "...") {
  //   if (text.length <= maxLength) {
  //     return text
  //   }
  //   return `${text.slice(0, maxLength)}${replacementText}`
  // }

  // const truncatedText = truncateText(textArticle, 200) // Tronquer le texte à 150 caractères

  return (
    <div className="divArticleCard">
      <div className="divFlexArticleCard">
        <div className="divTextArticle">
          <Link to={`/articles/${id}`}>
            <h2>{titleArticle}</h2>
          </Link>
          <h6>{formatDate(dateArticle)}</h6>
          {/* <p>{ReactHtmlParser(newlineToBreak(truncatedText))}</p> */}
        </div>

        <div className="divImgArticle">
          {urlImg ? (
            <img
              className="imgArticleCard"
              src={urlImg}
              alt={`illustration "${titleArticle}"`}
            />
          ) : (
            <img
              className="imgArticleCard"
              src={defaultImage}
              alt={`illustration "${titleArticle}"`}
            />
          )}
        </div>
      </div>
      <div className="divButtonArticleCard">
        <Link to={`/articles/${id}`}>
          <button className="buttonArticleCard" type="button">
            Lire
          </button>
        </Link>
      </div>
    </div>
  )
}

// Prop types pour définir les types attendus des props
ArticleCard.propTypes = {
  id: PropTypes.string.isRequired,
  titleArticle: PropTypes.string.isRequired,
  dateArticle: PropTypes.string.isRequired,
  textArticle: PropTypes.string.isRequired,
  urlImg: PropTypes.string,
}

// Valeurs par défaut pour les props optionnelles
ArticleCard.defaultProps = {
  urlImg: null,
}

// import React from "react"
// // import { useEffect, useState } from "react"

// export default function Article({
//   id,
//   titleArticle,
//   dateArticle,
//   textArticle,
//   urlImg,
// }) {
//   return (
//     <div className="Article">
//       <h2 className="cardTitle">Titre de l'article {titleArticle} </h2>
//       <p className="textContent">
//         Moi je passe pas mal de temps à la taverne. J'ai jamais entendu parlé de
//         celui-là! Vous savez c'est quand de même pas grave de pas savoir faire
//         des tartes! Ben quoi? C'est pas si grave que ça! Vous binez pas…
//       </p>
//       <button className="genericButton">Lire la suite</button>
//     </div>
//   )
// }
