import React, { useEffect } from "react"
import { usePageTitle } from "../components/PageTitleContext"

export default function Blog() {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Blog")
  }, [])

  return (
    <div className="Blog">
      <p>Je suis le Blog</p>
    </div>
  )
}
