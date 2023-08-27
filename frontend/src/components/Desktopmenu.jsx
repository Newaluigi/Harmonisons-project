export default function Desktopmenu() {
  return (
    <div className="Desktopmenu">
      <nav className="blend">
        <ul>
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
            {" "}
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
