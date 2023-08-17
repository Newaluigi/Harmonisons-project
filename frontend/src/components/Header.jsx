import { Link } from "react-router-dom"
import logo from "../assets/Logo/4.png"
import { usePageTitle } from ".//PageTitleContext"
import Burger from "./Burger"

export default function Header() {
  const { pageTitle } = usePageTitle()

  return (
    <div className="Header">
      <div className="navbar">
        <Link to="/" className="logoFromHeader">
          <img src={logo} alt="logo_du_site" className="imageLogo" />
        </Link>
        <h1 className="headerTitle">{pageTitle}</h1>
        <Burger />
      </div>
    </div>
  )
}
