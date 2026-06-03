export function Footer() {
  const styleConfig = {
    footer: {
      padding: '24px',
      marginTop: '40px',
      backgroundColor: '#1f2937',
      color: '#ffffff',
      textAlign: 'center',
    },
    text: {
      margin: 0,
      fontSize: '14px',
    },
  };

  return (
    <footer className="footer" style={styleConfig.footer}>
      <p style={styleConfig.text}>(c) 2026 WebStudio. Tutti i diritti riservati.</p>
    </footer>
  );
}

export default Footer;
