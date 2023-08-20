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

// import React, { useEffect, useState } from "react"

// export default function TestimonialCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [currentActive, setCurrentActive] = useState(0)

//   useEffect(() => {
//     const testimDots = Array.from(
//       document.getElementById("testim-dots")?.children
//     )
//     const testimContent = Array.from(
//       document.getElementById("testim-content")?.children
//     )
//     const testimLeftArrow = document.getElementById("left-arrow")
//     const testimRightArrow = document.getElementById("right-arrow")
//     const testimSpeed = 4500
//     let testimTimer
//     let touchStartPos
//     let touchEndPos
//     let touchPosDiff
//     const ignoreTouch = 30

//     const playSlide = (slide) => {
//       for (let k = 0; k < testimDots.length; k++) {
//         testimContent[k]?.classList.remove("active")
//         testimContent[k]?.classList.remove("inactive")
//         testimDots[k]?.classList.remove("active")
//       }

//       if (slide < 0) {
//         slide = setCurrentSlide(testimContent.length - 1)
//       }

//       if (slide > testimContent.length - 1) {
//         slide = setCurrentSlide(0)
//       }

//       if (currentActive !== currentSlide) {
//         testimContent[currentActive]?.classList.add("inactive")
//       }

//       testimContent[slide]?.classList.add("active")
//       testimDots[slide]?.classList.add("active")

//       setCurrentActive(currentSlide)

//       clearTimeout(testimTimer)
//       testimTimer = setTimeout(() => {
//         playSlide(currentSlide + 1)
//       }, testimSpeed)
//     }

//     playSlide(currentSlide)

//     document.addEventListener("keyup", (e) => {
//       switch (e.keyCode) {
//         case 37:
//           playSlide(currentSlide - 1)
//           break

//         case 39:
//           playSlide(currentSlide + 1)
//           break

//         default:
//           break
//       }
//     })

//     testimLeftArrow?.addEventListener("click", () => {
//       playSlide(currentSlide - 1)
//     })

//     testimRightArrow?.addEventListener("click", () => {
//       playSlide(currentSlide + 1)
//     })

//     for (let l = 0; l < testimDots.length; l++) {
//       testimDots[l]?.addEventListener("click", function () {
//         playSlide(testimDots.indexOf(this))
//       })
//     }

//     const testim = document.getElementById("testim")

//     testim?.addEventListener("touchstart", (e) => {
//       touchStartPos = e.changedTouches[0].clientX
//     })

//     testim?.addEventListener("touchend", (e) => {
//       touchEndPos = e.changedTouches[0].clientX
//       touchPosDiff = touchStartPos - touchEndPos

//       if (touchPosDiff > 0 + ignoreTouch) {
//         playSlide(currentSlide + 1)
//       } else if (touchPosDiff < 0 - ignoreTouch) {
//         playSlide(currentSlide - 1)
//       }
//     })

//     return () => {
//       clearTimeout(testimTimer)
//       document.removeEventListener("keyup", () => {})
//       testimLeftArrow?.removeEventListener("click", () => {})
//       testimRightArrow?.removeEventListener("click", () => {})
//       for (let l = 0; l < testimDots.length; l++) {
//         testimDots[l]?.removeEventListener("click", () => {})
//       }
//       testim?.removeEventListener("touchstart", () => {})
//       testim?.removeEventListener("touchend", () => {})
//     }
//   }, [currentSlide, currentActive])
//   return (
//     <div className="Carousel">
//       <p>Je suis le carousel</p>
//       <section id="testim" className="testim">
//         <div className="wrap">
//           <span id="right-arrow" className="arrow right fa fa-chevron-right">
//             x
//           </span>
//           <span id="left-arrow" className="arrow left fa fa-chevron-left ">
//             x
//           </span>
//           <ul id="testim-dots" className="dots">
//             <li className="dot active"></li>
//             <li className="dot"></li>
//             <li className="dot"></li>
//             <li className="dot"></li>
//             <li className="dot"></li>
//           </ul>
//           <div id="testim-content" className="cont">
//             <div className="active">
//               <div className="img">
//                 <img src="" alt="" />
//               </div>
//               <h2>Lorem P. Ipsum</h2>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco.
//               </p>
//             </div>

//             <div>
//               <div className="img">
//                 <img src="" alt="" />
//               </div>
//               <h2>Mr. Lorem Ipsum</h2>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco.
//               </p>
//             </div>

//             <div>
//               <div className="img">
//                 <img src="" alt="" />
//               </div>
//               <h2>Lorem Ipsum</h2>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco.
//               </p>
//             </div>

//             <div>
//               <div className="img">
//                 <img src="" alt="" />
//               </div>
//               <h2>Lorem De Ipsum</h2>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco.
//               </p>
//             </div>

//             <div>
//               <div className="img">
//                 <img src="" alt="" />
//               </div>
//               <h2>Ms. Lorem R. Ipsum</h2>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
