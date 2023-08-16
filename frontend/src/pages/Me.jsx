import React, { useEffect } from "react"
import { usePageTitle } from "../components/PageTitleContext"

export default function Me() {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Qui suis-je ?")
  }, [])

  return (
    <div className="Me">
      <p>je suis le ME</p>
    </div>
  )
}
