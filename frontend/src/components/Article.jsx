import React, { useState } from "react"
// import PropTypes from "prop-types"
import defaultImage from "../assets/Logo/Logo.png"
import ArticleModal from "./ArticleModal"
// import Image from "../assets/Photos/Portrait.jpg"
import ModalImage from "react-modal-image"

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
  console.info(id)

  const textLimit = 200
  const [truncatedText] = useState(
    textArticle.length > textLimit
      ? textArticle.substring(0, textLimit) + "..."
      : textArticle
  )

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="divArticleCard">
      <div className="Article">
        <div className="divTextArticle">
          <h2 className="cardTitle">{titleArticle}</h2>
          <h6>{formatDate(dateArticle)}</h6>
        </div>
        <div className="divImgArticle">
          {urlImg ? (
            <ModalImage
              className="imgArticleCard"
              src={urlImg}
              alt={`illustration "${titleArticle}"`}
            />
          ) : (
            <ModalImage
              className="imgArticleCarddefault"
              src={defaultImage}
              alt={`illustration "${titleArticle}"`}
            />
          )}
          {/* <ModalImage
            className="imgArticleCarddefault"
            small={Image}
            large={Image}
            hideDownload={true}
            alt="portrait Céline"
          /> */}
        </div>
        <img
          className="imgArticleCarddefault"
          src={defaultImage}
          alt={`illustration "${titleArticle}"`}
        />

        <p className="textContent">{truncatedText}</p>
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
