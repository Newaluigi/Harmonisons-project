import React, { useEffect } from "react"
import { usePageTitle } from "../components/PageTitleContext"

export default function Contact() {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Contact")
  }, [])

  return (
    <div className="Contact">
      <p>Je suis le contact</p>
    </div>
  )
}
