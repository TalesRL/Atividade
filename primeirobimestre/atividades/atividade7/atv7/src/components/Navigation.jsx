function Navigation({ links }) {
  return (
    <nav className="menu main-menu" aria-label="Navegação principal">
      <ul className="menu-list">
        {links.map((link) => (
          <li key={link.nome}>
            <a className="menu-link" href={link.url}>
              {link.nome}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation