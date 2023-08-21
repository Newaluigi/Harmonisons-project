import React, { useEffect } from "react"
import { usePageTitle } from "../components/PageTitleContext"
import Article from "../components/Article"

export default function Blog() {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Blog")
  }, [])

  return (
    <div className="Blog">
      <Article />
    </div>
  )
}
