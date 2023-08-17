import React, { useEffect } from "react"
import { usePageTitle } from "../components/PageTitleContext"

export default function Care() {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Déblocage transgénérationnel")
  }, [])

  return (
    <div className="Care">
      <p>Je suis le Care</p>
    </div>
  )
}
