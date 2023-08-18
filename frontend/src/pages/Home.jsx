import celine from "../assets/Photos/Portrait.jpg"
export default function Home() {
  return (
    <div className="Home">
      <section id="presentation">
        <h2 className="sectionTitle">Reprends les rennes de ta destinée :</h2>
        <p>
          Tu es une professionnelle du bien-être qui souhaite :
          <ul>
            <li> Éliminer les blocages qui te font stagner dans ta vie pro </li>
            <li> Renforcer ton sentiment de légitimité et de confiance </li>
            <li>
              {" "}
              Arrêter de t'auto-saboter dans ta croissance professionnelle{" "}
            </li>
            <li> Te sentir vraiment alignée dans ton activité</li>
            Mais :<li> Tu as peur du manque </li>
            <li> Tu n'oses pas « te vendre » </li>
            <li>
              {" "}
              Tu n'attires pas autant de client.e.s que tu le voudrais pour
              vivre de ton activité
            </li>
            <li>
              {" "}
              Tu n'arrives pas à te défaire de blocages intérieurs malgré tout
              le travail sur toi que tu as déjà fait
            </li>
          </ul>
        </p>
        <br />
        <p>
          <strong>
            Si aujourd'hui tu n'as toujours pas réussi à t'épanouir en tant que
            professionnelle du bien-être, ce n'est pas parce que "tu es nulle",
            c'est sûrement qu'il y a quelque chose de beaucoup plus profond qui
            te bloque
          </strong>
        </p>
      </section>
      <button id="mainButton">Me débloquer</button>
      <section id="bioCard">
        <h2>Céline</h2>
        <div className="cardContent">
          <img src={celine} alt="photo Céline" id="cardPicture" />
          <div className="textContent">
            <p>
              Praticienne chamanique spécialisée dans les déblocages
              transgénérationnels des femmes accompagnantes au mieux-être pour
              se sentir légitime et prendre sa place authentiquement.
            </p>
            <button className="genericButton">En savoir plus</button>
          </div>
        </div>
      </section>
    </div>
  )
}
