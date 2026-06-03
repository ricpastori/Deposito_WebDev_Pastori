function Header({ linksList }) {
  return (
    <header className="site-header">
      <nav className="container" aria-label="Menu principale">
        <ul>
          <li>
            <a className="site-logo" href={linksList.home}>
              NomeAzienda
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href={linksList.home}>Home</a>
          </li>
          <li>
            <a href={linksList.team}>Team</a>
          </li>
          <li>
            <a href={linksList.contacts}>Contatti</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
