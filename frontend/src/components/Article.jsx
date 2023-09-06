import React, { useState } from "react"
import defaultImage from "../assets/Logo/Logo.png"
import ArticleModal from "./ArticleModal"
import Image from "../assets/Photos/article.jpg"
import ModalImage from "react-modal-image"

// function formatDate(dateString) {
//   const date = new Date(dateString)
//   const formatter = new Intl.DateTimeFormat("fr-FR", {
//     year: "numeric",
//     month: "long",
//     day: "2-digit",
//   })
//   return formatter.format(date)
// }

export default function Article({ id, titleArticle, textArticle, urlImg }) {
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
        </div>
        <div className="divImgArticle">
          {/* {urlImg ? (
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
          )} */}
          <ModalImage
            className="imgArticleCarddefault"
            small={Image}
            large={Image}
            hideDownload={true}
            alt="portrait Céline"
          />
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
