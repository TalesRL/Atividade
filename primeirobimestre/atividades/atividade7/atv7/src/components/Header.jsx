function Header({ titulo, subtitulo, children }) {
  return (
    <header className="page-header">
      <div className="header-inner">
        <h1 className="site-title">
          {titulo}

          <span className="site-title-accent">
            {subtitulo}
          </span>
        </h1>

        {children}
      </div>
    </header>
  )
}

export default Header