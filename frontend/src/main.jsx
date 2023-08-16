import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/main.scss"
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
