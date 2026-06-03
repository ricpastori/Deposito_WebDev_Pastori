

export function Header() {
  const styleConfig = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 32px',
      backgroundColor: '#f4f7fb',
      borderBottom: '1px solid #d8e1ec',
    },
    title: {
      margin: 0,
      color: '#1f2937',
    },
    nav: {
      display: 'flex',
      gap: '16px',
    },
    link: {
      color: '#2563eb',
      textDecoration: 'none',
      fontWeight: '500',
    },
  };

  return (
    <header className="header" style={styleConfig.header}>
      <h2 style={styleConfig.title}>WebStudio</h2>

      <nav className="nav" style={styleConfig.nav}>
        <a href="#home" style={styleConfig.link}>Home</a>
        <a href="#servizi" style={styleConfig.link}>Servizi</a>
        <a href="#contatti" style={styleConfig.link}>Contatti</a>
      </nav>
    </header>
  );
}

export default Header;
