import React, { useState } from "react"

export default function Burger() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
  const [isOpen, setIsOpen] = useState(false)

  const updateMenu = () => {
    setIsOpen(!isOpen) // Mettre à jour l'état d'abord

    if (isOpen) {
      setBurgerClass("burger-bar unclicked")
    } else {
      setBurgerClass("burger-bar clicked")
    }
  }

  return (
    <div className="burgerContainer">
      <div className="burgerContent">
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </div>

      {/* <div className={menuClass}> */}
      <div className="listMenuDiv">
        <ul className="listMenu" style={{ display: isOpen ? "block" : "none" }}>
          <li>
            <a href="/quisuisje">Qui suis-je ?</a>
          </li>
          <li>
            <a href="/soins">Déblocage transgénérationnel</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  )
}
