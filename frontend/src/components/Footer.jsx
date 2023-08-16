import { useState } from "react"
import { FaInstagram } from "react-icons/fa6"
import Legals from "../pages/Legal"

export default function Footer() {
  const [activeModal, setActiveModal] = useState(false)

  const handleButtonClick = (modalName) => {
    setActiveModal(modalName)
  }

  const handleCloseModal = () => {
    setActiveModal(null)
  }

  return (
    <div className="Footer">
      <a
        href="https://www.instagram.com/chamanisme_transgenerationnel/"
        className="socialMedia"
      >
        <FaInstagram /> chamanisme_transgenerationnel
      </a>
      <div className="mentionsLegales">
        <a onClick={() => handleButtonClick("legals")} className="modalOpen">
          Mentions Légales
        </a>
        {activeModal === "legals" && (
          <Legals activeModal={activeModal} onClose={handleCloseModal} />
        )}
        <p>© 2023 ۞ Harmonisons ۞ </p>
      </div>
    </div>
  )
}
