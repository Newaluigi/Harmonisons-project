import React, { useState } from "react"
// import PropTypes from "prop-types"
import defaultImage from "../assets/Photos/Formation.jpg"
import ArticleModal from "./ArticleModal"

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

export default function Article({
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

  // const [isSeleted, setIsSelected] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  // const handleClick = () => {
  //   setIsSelected((preState) => !preState)
  // }

  return (
    <div className="divArticleCard">
      <div className="Article">
        <div className="divTextArticle">
          <h2 className="cardTitle">{titleArticle}</h2>
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
        <p className="textContent">
          {textArticle}
          Moi je passe pas mal de temps à la taverne. J'ai jamais entendu parlé
          de celui-là! Vous savez c'est quand de même pas grave de pas savoir
          faire des tartes! Ben quoi? C'est pas si grave que ça! Vous binez pas…
        </p>
        <button className="genericButton" onClick={() => setOpenModal(true)}>
          Lire la suite
        </button>
      </div>
      {openModal && (
        <ArticleModal
          id={id}
          dateArticle={dateArticle}
          titleArticle={titleArticle}
          textArticle={textArticle}
          urlImg={urlImg}
          isOpen={openModal}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </div>
  )
}
