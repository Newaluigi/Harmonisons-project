import React, { createContext, useContext, useState } from "react"

const PageTitleContext = createContext()

export function usePageTitle() {
  return useContext(PageTitleContext)
}

export function PageTitleProvider({ children }) {
  const [pageTitle, setPageTitle] = useState("Harmonisons")

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  )
}
