import celine from "../assets/Photos/Portrait.jpg"
import ModalImage from "react-modal-image"
import icone1 from "../assets/Icones/image3.png"
import icone2 from "../assets/Icones/image6.png"
import logo from "../assets/Logo/Logo.png"

export default function Home() {
  return (
    <div className="Home">
      <h1 id="siteTitle">HARMONISONS</h1>
      <img src={logo} alt="logo" id="logoHome" />
      <section id="presentation">
        <h2 className="sectionTitle">Reprends les rennes de ta destinée :</h2>
        <p className="genericParagraph">
          Tu es une professionnelle du bien-être qui souhaite :
          <ul>
            <li> Éliminer les blocages qui te font stagner dans ta vie pro </li>
            <li> Renforcer ton sentiment de légitimité et de confiance </li>
            <li>
              Arrêter de t'auto-saboter dans ta croissance professionnelle
            </li>
            <li> Te sentir vraiment alignée dans ton activité</li>
            Mais :<li> Tu as peur du manque </li>
            <li> Tu n'oses pas « te vendre » </li>
            <li>
              Tu n'attires pas autant de client.e.s que tu le voudrais pour
              vivre de ton activité
            </li>
            <li>
              Tu n'arrives pas à te défaire de blocages intérieurs malgré tout
              le travail sur toi que tu as déjà fait
            </li>
          </ul>
        </p>
        <br />
        <p className="genericParagraph">
          <strong>
            Si aujourd'hui tu n'as toujours pas réussi à t'épanouir en tant que
            professionnelle du bien-être, ce n'est pas parce que "tu es nulle",
            c'est sûrement qu'il y a quelque chose de beaucoup plus profond qui
            te bloque.
          </strong>
        </p>
      </section>
      <div className="welcomeBtn">
        <img src={icone1} alt="lune" className="welcomeIcon" />
        <div className="cirrcle">
          <button id="mainButton">
            <a href="/soins">Me débloquer</a>
          </button>
        </div>
        <img src={icone2} alt="lune" className="welcomeIcon" />
      </div>
      <section id="bioCard">
        <h2 className="cardTitle">Céline</h2>
        <div className="cardContent">
          <ModalImage
            className="cardPicture"
            small={celine}
            large={celine}
            hideDownload={true}
            alt="portrait Céline"
          />
          <div className="textContent">
            <p>
              Praticienne chamanique spécialisée dans les déblocages
              transgénérationnels des femmes accompagnantes au mieux-être pour
              se sentir légitime et prendre sa place authentiquement.
            </p>
            <button className="genericButton">
              <a href="/quisuisje">En savoir plus</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
