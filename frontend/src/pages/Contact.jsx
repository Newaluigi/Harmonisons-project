import React, { useEffect } from "react"
import { usePageTitle } from "../components/PageTitleContext"
import { InlineWidget } from "react-calendly"

export default function Contact() {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Contact")
  }, [])

  return (
    <div className="Contact">
      <section id="Calendar">
        <h2 className="sectionTitle">Prendre RDV</h2>
        <p className="genericParagraph"></p>
        <InlineWidget url="https://calendly.com/celineharmonisons/" />
      </section>
      <section id="ContactForm">
        <h2 className="sectionTitle">Une question ?</h2>
        <p className="genericParagraph"></p>
        <form>
          <div className="input-group">
            <input
              name="name"
              type="text"
              className="input-group__input"
              required
            />
            <label htmlFor="name" className="input-group__label">
              Nom
            </label>
          </div>
          <div className="input-group">
            <input
              name="email"
              type="text"
              className="input-group__input"
              required
            />
            <label htmlFor="email" className="input-group__label">
              Email
            </label>
          </div>
          <div className="input-group">
            <textarea
              name="text"
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
    </div>
  )
}
