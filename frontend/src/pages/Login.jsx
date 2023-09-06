import React, { useState } from "react"

export default function Login() {
  const [fieldsFilled, setFieldsFilled] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const userEmail = e.target.user_email.value
    const password = e.target.password.value
    if (userEmail && password) {
      setFieldsFilled(true)
      // Effectuer la redirection manuellement ici.
      window.location.href = "/salsifi"
    } else {
      setFieldsFilled(false)
    }
  }

  return (
    <div className="Login">
      <section id="ContactForm">
        <h2 className="sectionTitle">Bienvenue Céline</h2>
        <p className="genericParagraph">
          Connecte-toi à ton espace administrateur pour gérer le blog.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <input
              name="user_email"
              type="email"
              className="input-group__input"
              required
              title="Veuillez entrer une adresse e-mail valide"
            />
            <label htmlFor="user_email" className="input-group__label">
              Email
            </label>
          </div>
          <div className="input-group">
            <input
              name="password"
              type="password"
              className="input-group__input"
              required
            />
            <label htmlFor="password" className="input-group__label">
              Mot de passe
            </label>
          </div>
          <button type="submit" className="genericButton">
            Se connecter
          </button>
        </form>
        {fieldsFilled && <p>Redirection en cours...</p>}
      </section>
    </div>
  )
}
