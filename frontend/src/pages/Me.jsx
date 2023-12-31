import feu from "../assets/Photos/Formation.jpg"
import React, { useEffect } from "react"
import { usePageTitle } from "../components/PageTitleContext"
import ModalImage from "react-modal-image"
import Testimonials from "../components/Testimonials"
import Timeline from "../components/Timeline"

export default function Me() {
  const { setPageTitle } = usePageTitle()

  useEffect(() => {
    setPageTitle("Qui suis-je ?")
  }, [])

  return (
    <div className="Me">
      <section id="therapeute">
        <h2 className="sectionTitle breathing">Thérapeute chamanique</h2>
        <p className="genericParagraph">
          Depuis que j'étais très jeune fille, j'avais pris l'habitude d'être
          l'oreille et l'épaule pour autrui. J'ai développé pendant ces années
          des qualités d'écoute et d'empathie indispensables à ma pratique
          d'accompagnante.
          <br />
          Après mes premières initiations officielles en 2015, je commence à
          donner des soins énergétiques, tout d'abord à mes proches et à mes
          collègues de travail. Ayant de très bons retours et me sentant
          pleinement à ma place dans l'accompagnement, j'augmente
          progressivement le nombre de mes consultations.
        </p>
        <div id="formationPic">
          <ModalImage
            className="tcPicture"
            small={feu}
            large={feu}
            alt="chamanisme près du feu"
            hideDownload={true}
          />
        </div>
        <p className="genericParagraph">
          En 2019, je m'installe à temps plein en tant que thérapeute holistique
          dans mon cabinet à domicile, à Montmorency dans le Val-d'Oise. J'ai
          d'excellents retours, le bouche-à-oreille me permet de rencontrer
          régulièrement de nouvelles belles âmes à accompagner sur leur chemin
          de guérison. J'améliore mes services pour intégrer davantage de
          travail sur la psyché (dimension mentale et émotionnelle), par du
          dialogue de conscientisation, du coaching et des voyages intérieurs.
          <br />
          J'ai également le plaisir et l'honneur d'animer plusieurs initiations
          au voyage chamanique en petit groupe, et quelques autres cérémonies
          chamaniques inspirantes pour se relier au Sacré en nous et autour de
          nous !
        </p>
        <button className="genericButton">
          <a href="/blog">En savoir plus</a>
        </button>
      </section>
      <section id="formation">
        <h2 className="sectionTitle">Parcours de vie et formation</h2>
        <div id="timeline">
          <Timeline />
        </div>
        <button className="genericButton">
          <a href="/contact">Me contacter</a>
        </button>
      </section>
      <section id="temoignages">
        <h2 className="sectionTitle">Témoignages</h2>
        <div id="carroussel"></div>
        <Testimonials />
        <button className="genericButton">
          <a href="/contact">Prendre RDV</a>
        </button>
      </section>
    </div>
  )
}
