import React, { useEffect } from "react"
import { usePageTitle } from "../components/PageTitleContext"
import image1 from "../assets/Icones/image1.png"
import image2 from "../assets/Icones/image2.png"
import image4 from "../assets/Icones/image4.png"

export default function Care() {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Déblocage transgénérationnel")
  }, [])

  return (
    <div className="Care">
      <section>
        <h2 className="sectionTitle">Détails du soin</h2>
        <div>
          <img src={image1} alt="mains lune magie" />
          <p className="genericParagraph">
            Je crois de tout mon cœur que notre rôle est essentiel à l'émergence
            d'une Humanité plus apaisée, plus reconnectée à elle-même, et plus
            solidaire. Nous vivons à une époque pleine d'opportunités, avec le
            moyen de connecter avec des personnes et des connaissances plus
            facilement et abondamment que jamais.
          </p>
        </div>
        <p className="genericParagraph">
          Mon rôle est de vous permettre de réactiver vos ressources que vous
          avez longuement développée en cette vie ou celles de vos ancêtres,
          afin de : lancer votre projet vous autoriser à être reconnue en tant
          que professionnelle réduire l'auto-sabotage et augmenter les actions
          alignées attirer à vous des client.e.s et être en mesure d'aller les
          chercher exprimer votre approche unique tout en étant ancré dans la
          réalité du marché vous sentir dans l'abondance pour pouvoir la générer
        </p>
        <div>
          <img src={image2} alt="mains boule de cristal magie" />
          <p className="genericParagraph">
            Un soin d'une lignée ancestrale (maternelle ou paternelle) est un
            accompagnement à distance (visio) sur 3 séances, pour éliminer les
            blocages transgénérationnels invisibles qui t'empêchent de te
            réaliser en tant que professionnelle du bien-être.
          </p>
        </div>
        <p className="genericParagraph">
          Chacune des 3 séances comprends ces 4 étapes :
          <br />
          <br />
          <ul>
            <li>Échanger sur ta problématique</li>
            <li>
              Entrer en transe légère toutes les deux et avoir des visions
              intuitives
            </li>
            <li>
              Recevoir un puissant soin sonore et énergétique chamanique
              (personnalisé et sur-mesure)
            </li>
            <li>
              Débriefer pour tirer des clés de ton expérience pour avancer
            </li>
          </ul>
        </p>
        <button className="genericButton">
          <a href="/contact">Prenre RDV</a>
        </button>
      </section>
      <section>
        <h2 className="sectionTitle">Autres accompagnements</h2>
        <div>
          <img src={image4} alt="mains lune magie" />
          <p className="genericParagraph">
            De toute façon le chevalier de Provence il faudrait déjà mettre la
            main dessus. Non Provençal c'est mon nom. Mais… C'est le Chevalier
            de Provence ou le Chevalier Gaulois? Faudrait savoir!
          </p>
        </div>
        <p className="genericParagraph">
          C'est quand même magnifique une armée bien coordonnée, hein! Et alors
          c'est pas permis? Y a des gens qui ont pris la peine de faire un
          dessert. La moindre des choses c'est de rester pour le manger. Alors
          par contre, si vous sentez qu'il s'énerve un peu, hein, vous lui
          sortez un morceau de viande. C'est une tarte aux myrtilles. Pourquoi
          elle vous revient pas? N'empêche que j'suis une légende! Et si on
          faisait le coup du bouclier humain? Déjà à la corne, ils regardent
          même pas vers ici! Vous pouvez bien agiter tout les drapeaux que vous
          voudrez! Qu'est ce que j'ai dit? Une connerie? Oui, ou une fissure à
          colmater dans un muret. Vous binez pas… Même nous on a pas tout
          compris. Mais on en entend parler dans les tavernes à ivrognes! Voilà!
          Sans vouloir la ramener la seule différence concrète avec les briques
          c'est que vous appelez ça des tartes. Et on peut savoir depuis quand
          vous arpentez la Bretagne en racontant à tout le monde que vous vous
          appelez Provençal le Gaulois? Non mais c'est dingue cette histoire!
          C'est pas parce que vous faites des tartes pour des petits enfants qui
          existent pas que je dois les amener à la pêche, non? Vous allez me
          faire le plaisir devous remuez un peu les miches, Sire, j'ai
          l'impression de me battre contre une vieille! Ah, ben tourné vers
          là-bas c'est sûr, moi non plus je vois rien. Ca vous emmerde ce que
          j'raconte?
        </p>
        <button className="genericButton">
          <a href="/contact">Me contacter</a>
        </button>
      </section>
      <section id="formulesCard">
        <h2 className="cardTitle">Formules</h2>
        <div className="snip1404">
          <div className="plan">
            <header>
              <h4 className="plan-title">Starter</h4>
              <div className="plan-cost">
                <span className="plan-price">$19</span>
                <span className="plan-type">/month</span>
              </div>
            </header>
            <ul className="plan-features">
              <li>
                <i className="ion-checkmark"> </i>5GB Linux Web Space
              </li>
              <li>
                <i className="ion-checkmark"> </i>5 MySQL Databases
              </li>
              <li>
                <i className="ion-checkmark"> </i>Unlimited Email
              </li>
              <li>
                <i className="ion-checkmark"> </i>250Gb mo Transfer
              </li>
              <li>
                <i className="ion-checkmark"> </i>24/7 Tech Support
              </li>
              <li>
                <i className="ion-checkmark"> </i>Daily Backups
              </li>
            </ul>
          </div>
          <div className="plan">
            <header>
              <h4 className="plan-title">Basic</h4>
              <div className="plan-cost">
                <span className="plan-price">$29</span>
                <span className="plan-type">/month</span>
              </div>
            </header>
            <ul className="plan-features">
              <li>
                <i className="ion-checkmark"> </i>10GB Linux Web Space
              </li>
              <li>
                <i className="ion-checkmark"> </i>10 MySQL Databases
              </li>
              <li>
                <i className="ion-checkmark"> </i>Unlimited Email
              </li>
              <li>
                <i className="ion-checkmark"> </i>500Gb mo Transfer
              </li>
              <li>
                <i className="ion-checkmark"> </i>24/7 Tech Support
              </li>
              <li>
                <i className="ion-checkmark"> </i>Daily Backups
              </li>
            </ul>
          </div>

          <div className="plan">
            <header>
              <h4 className="plan-title">Ultra</h4>
              <div className="plan-cost">
                <span className="plan-price">$99</span>
                <span className="plan-type">/month</span>
              </div>
            </header>
            <ul className="plan-features">
              <li>
                <i className="ion-checkmark"> </i>100GB Linux Web Space
              </li>
              <li>
                <i className="ion-checkmark"> </i>Unlimited MySQL Databases
              </li>
              <li>
                <i className="ion-checkmark"> </i>Unlimited Email
              </li>
              <li>
                <i className="ion-checkmark"> </i>10000Gb mo Transfer
              </li>
              <li>
                <i className="ion-checkmark"> </i>24/7 Tech Support
              </li>
              <li>
                <i className="ion-checkmark"> </i>Daily Backups
              </li>
            </ul>
          </div>
        </div>

        <button className="genericButton">
          <a href="/contact">Prenre RDV</a>
        </button>
      </section>
    </div>
  )
}
