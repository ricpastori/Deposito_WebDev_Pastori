const phrases = [
  'Una landing page semplice, realizzata con componenti React separati.',
  'Componenti chiari rendono il codice piu facile da leggere.',
  'React aggiorna la pagina quando cambia lo stato del componente.',
  'Un piccolo click puo cambiare il contenuto mostrato a schermo.',
];

let phraseIndex = 0;

export function Hero() {
  function handleNextPhrase() {
    phraseIndex = phraseIndex + 1;

    if (phraseIndex === phrases.length) {
      phraseIndex = 0;
    }

    const paragraph = document.getElementById('hero-description');
    paragraph.textContent = phrases[phraseIndex];
  }

  const styleConfig = {
    section: {
      padding: '60px 32px',
      textAlign: 'center',
      backgroundColor: '#eef4ff',
    },
    title: {
      margin: '0 0 16px',
      color: '#1f2937',
      fontSize: '42px',
    },
    text: {
      maxWidth: '600px',
      margin: '0 auto',
      color: '#6b7280',
      fontSize: '18px',
    },
    button: {
      marginTop: '24px',
      padding: '12px 24px',
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <section id="home" className="hero" style={styleConfig.section}>
      <h1 style={styleConfig.title}>Crea il tuo sito web</h1>
      <p id="hero-description" style={styleConfig.text}>
        {phrases[phraseIndex]}
      </p>
      <button
        className="cta-button"
        style={styleConfig.button}
        type="button"
        onClick={handleNextPhrase}
      >
        Cambia frase
      </button>
    </section>
  );
}

export default Hero;
