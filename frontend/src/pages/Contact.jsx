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
      </section>
      <p>Je suis le contact</p>
    </div>
  )
}
