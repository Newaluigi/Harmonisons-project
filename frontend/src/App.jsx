import { Routes, Route, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Me from "./pages/Me"
import Care from "./pages/Care"
import Blog from "./pages/Blog"
import Legals from "./pages/Legal"
import NotFound from "./pages/NotFound"
import Admin from "./pages/Admin"
import { PageTitleProvider } from "./components/PageTitleContext"
import FireflyBackground from "./components/FireflyBackground"
import Login from "./pages/Login"

function App() {
  const location = useLocation()

  const showHeader = location.pathname !== "/"

  return (
    <PageTitleProvider>
      <div className="App">
        <FireflyBackground />
        {showHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quisuisje" element={<Me />} />
          <Route path="/soins" element={<Care />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legals" element={<Legals />} />
          <Route path="/leodagan" element={<Login />} />
          <Route path="/salsifi" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </PageTitleProvider>
  )
}
export default App
