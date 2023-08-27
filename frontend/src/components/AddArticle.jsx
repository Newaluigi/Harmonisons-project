import { TbAsterisk } from "react-icons/tb"
import React, { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AddArticle = () => {
  const [nameArticle, setNameArticle] = useState("")
  const [dateArticle, setDateArticle] = useState("")
  const [contentArticle, setContentArticle] = useState("")
  const [pictureArticle, setPictureArticle] = useState(null)
  const [archivedArticle, setArchivedArticle] = useState(0)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // const formData = new FormData()
    // formData.append("titleArticle", nameArticle)
    // formData.append("dateArticle", dateArticle)
    // formData.append("textArticle", contentArticle)
    // formData.append("urlImg", pictureArticle)
    // formData.append("archived", archivedArticle)
    const formData = {
      titleArticle: nameArticle, // Utilisez nameArticle ici pour obtenir la valeur du titre
      dateArticle,
      textArticle: contentArticle,
      urlImg: pictureArticle,
      archived: archivedArticle,
    }

    console.info("Ajout", formData)
    try {
      await axios.post("http://localhost:4242/articles", formData)

      setNameArticle("")
      setDateArticle("")
      setContentArticle("")
      setPictureArticle(null)
      setArchivedArticle(0)
      setSubmitSuccess(true)
      toast.success("L'article a bien été ajouté!", {
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
      console.error("Erreur lors de l'ajout de l'article:", error)
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

  const handleFileChange = (e) => {
    if (e.target.files.length === 1) {
      setPictureArticle(e.target.files[0])
    } else {
      setPictureArticle(null)
    }
  }

  return (
    <div className="addArticle">
      <form className="interieurCadre" onSubmit={handleSubmit}>
        <h2 className="cardTitle">Ajouter un article</h2>
        <label className="label" htmlFor="nameArticle">
          Titre de l'article
          <TbAsterisk />:
        </label>

        <input
          type="text"
          id="nameArticle"
          value={nameArticle}
          onChange={(e) => setNameArticle(e.target.value)}
          required
        />
        <br />
        <label className="label" htmlFor="dateArticle">
          Date de l'article :
        </label>

        <input
          type="date"
          id="dateArticle"
          value={dateArticle}
          onChange={(e) => setDateArticle(e.target.value)}
        />
        <br />
        <div className="texteArea">
          <label className="label" htmlFor="contentArticle">
            Contenu de l'article:
          </label>
          <br />
          <textarea
            className="contentArticleArea"
            id="contentArticle"
            value={contentArticle}
            onChange={(e) => setContentArticle(e.target.value)}
          ></textarea>
        </div>
        <br />
        <div className="image">
          <label className="label" htmlFor="pictureArticle">
            Ajouter une image:
          </label>
          <input
            type="file"
            id="pictureArticle"
            accept="image/*"
            onChange={handleFileChange}
          />
          {pictureArticle && (
            <img
              className="photoArticle"
              src={URL.createObjectURL(pictureArticle)}
              alt="Aperçu de l'image"
            />
          )}
        </div>
        <br />

        <label className="label" htmlFor="archivedArticle">
          Archiver l'article
          <TbAsterisk />:
        </label>
        <select
          id="archivedArticle"
          value={archivedArticle}
          onChange={(e) => archivedArticle(Number(e.target.value))}
          required
        >
          <option value={0}>Non</option>
          <option value={1}>Oui</option>
        </select>
        <br />

        <button className="genericButton" type="submit">
          {submitSuccess ? "Ajouté!" : "Ajouter l'article"}
        </button>
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

export default AddArticle
