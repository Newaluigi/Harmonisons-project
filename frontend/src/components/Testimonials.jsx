import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <div className="myCarousel">
            <h3>Lola</h3>
            <h4>praticienne en soins LaHoChi et guidance chamanique</h4>
            <p>
              Qu'il s'agisse de soins chamaniques ou d'un suivi thérapeutique,
              les services proposés par Céline sont de véritables pépites!
              Profondément humaine, elle prend en charge l'accompagnement avec
              beaucoup d'humilité. Elle a une oreille attentive, un cœur
              bienveillant et elle sait mettre en place et maintenir un cadre
              respectueux à propos de ce qui lui est confié. J'ai une immense
              gratitude pour le travail fait ensemble qui continue de porter ses
              fruits encore aujourd'hui, alors je ne peux que vous recommander
              son approche très précieuse!
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <h3>Jeanne</h3>
            <h4>coach et praticienne PNL</h4>
            <p>
              J'ai testé des approches plus conventionnelles (hypnose, psy,
              coaching), et les soins de Céline m'ont permis de me confronter
              aux problèmes tellement intégrés dans mes lignées qu'ils étaient
              devenus invisibles. Comme si j'avais un poids sur les épaules sans
              le savoir, et que tout d'un coup j'ai pu me redresser et me sentir
              légère. Je n'attire plus les mêmes personnes, j'ai fait un grand
              tri dans ma vie, et aujourd'hui j'ai lancé ma nouvelle activité où
              je me sens enfin à ma place, alignée.
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <h3>Ophélie</h3>
            <h4>hypnothérapeute et naturopathe</h4>
            <p>
              Je recommande 1000 fois Céline, c'est une thérapeute à l'écoute,
              engagée et douce. Elle prend le temps d'écouter, de comprendre et
              de trouver ensemble des clés avec lesquelles repartir pour la
              suite. Un travail sur soi est un chemin qui peut être long et j'ai
              vraiment ressentis des effets immédiats, j'ai apprécié repartir
              avec des choses concrètes qui m'ont données envie et force pour
              continuer ce travail de mon côté. Pour terminer, un soin
              incroyable et puissant au son du tambour et de sa douce voix qui
              m'a vraiment redonné un énergie folle. Alors OUI OUI OUI allez y
              vous avez tout à y gagner =)
            </p>
          </div>
        </div>
        <div>
          <div className="myCarousel">
            <h3>Anne</h3>
            <h4>praticienne LaHoChi</h4>
            <p>
              J'avais toujours été attiré par les énergies mais j'avais trop
              peur d'y aller. C'était tabou dans ma famille, et j'avais
              l'impression d'être folle petite quand je ressentais et voyais des
              choses… Quand j'ai rencontré Céline, je venais de débuter mes
              formations mais j'avais encore énormément de doutes. Elle m'a
              beaucoup rassurée et donné des clés pragmatiques pour comprendre
              l'intuition. Ses soins sont incroyables ! C'est vraiment une
              pépite, n'ayez pas peur de passer par la machine à essorer haha !
              Plus sérieusement, des grandes transformations surviennent après
              ces soins. Je recommande à toutes celles qui veulent s'ancrer et
              vraiment oser relever les défis de la grande aventure d'incarner
              sa mission de vie 😉
            </p>
          </div>
        </div>
        <div>
          <div className="myCarousel">
            <h3>Anne</h3>
            <h4>artiste art-thérapeute</h4>
            <p>
              Je me suis complètement laissée emportée par tes chants, tes
              tambours, et toute ces énergies qui me transportaient physiquement
              dans des images incroyables. Quelque chose s'est réparé en moi,
              pour laisser place à une grande lumière.
            </p>
          </div>
        </div>
      </Carousel>
    )
  }
}
