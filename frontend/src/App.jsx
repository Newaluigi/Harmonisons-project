import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Me from "./pages/Me"
import Care from "./pages/Care"
import Blog from "./pages/Blog"
import Legals from "./pages/Legal"
import NotFound from "./pages/404"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quisuisje" element={<Me />} />
        <Route path="/soins" element={<Care />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legals" element={<Legals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
