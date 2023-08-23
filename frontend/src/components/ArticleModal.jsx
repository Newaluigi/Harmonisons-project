import { GrClose } from "react-icons/gr"

export default function ArticleModal(
  { defaultImage, titleArticle, textArticle, urlImg, closeModal },
  isOpen
) {
  if (!isOpen) {
    return null
  }
  return (
    <div className="MQ-all">
      <div className="modalBg">
        <button className="MQ-quests1" onClick={() => closeModal(false)}>
          <GrClose />
        </button>
        <div className="divTextArticle">
          <h2 className="cardTitle">{titleArticle}</h2>
        </div>
        <p className="textContent">{textArticle}</p>
      </div>
    </div>
  )
}
