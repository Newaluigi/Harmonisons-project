import React, { useEffect, useRef } from "react"
import { usePageTitle } from "../components/PageTitleContext"
import { InlineWidget } from "react-calendly"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Contact() {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Contact")
  }, [])

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    if (e.target.honeypot.value === "") {
      emailjs
        .sendForm(
          "service_xcel858",
          "template_86fc0gv",
          form.current,
          "ElLj96q8cMOz5joh1"
        )
        .then(
          (result) => {
            toast.success(
              "Merci pour votre message. Céline reprendra contact avec vous au plus vite!",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              }
            )
          },
          (_error) => {
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
        )
      e.target.reset()
    } else {
      alert("Bot submission detected.")
      e.target.reset()
    }
  }

  return (
    <div className="Contact">
      <section id="Calendar">
        <h2 className="sectionTitle">Prendre RDV</h2>
        <p className="genericParagraph"></p>
        <InlineWidget url="https://calendly.com/celineharmonisons/" />
      </section>
      <section id="ContactForm">
        <h2 className="sectionTitle">Une question ?</h2>
        <p className="genericParagraph">
          Je recevrais votre message directement dans ma boîte mail. (Réponse
          entre 1 à 7 jours généralement.)
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-group honeypot">
            <input
              name="honeypot"
              type="text"
              className="input-group__input"
              autoComplete="off"
            />
            <label htmlFor="honeypot" className="input-group__label">
              Ne pas remplir ce champ
            </label>
          </div>
          <div className="input-group">
            <input
              name="user_name"
              type="text"
              className="input-group__input"
              required
            />
            <label htmlFor="user_name" className="input-group__label">
              Nom
            </label>
          </div>
          <div className="input-group">
            <input
              name="user_email"
              type="email"
              className="input-group__input"
              required
              title="Veuillez entrer une adresse e-mail valide"
            />
            <label htmlFor="user_email" className="input-group__label">
              Email
            </label>
          </div>
          <div className="input-group">
            <textarea
              name="message"
              className="input-group__input"
              required
            ></textarea>
            <label htmlFor="message" className="input-group__label">
              Votre message
            </label>
          </div>
          <button type="submit" className="genericButton">
            Envoyer
          </button>
        </form>
      </section>
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
