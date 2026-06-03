const features = [
  {
    title: 'Siti responsive',
    description: 'Layout semplici che si adattano a desktop e mobile.',
  },
  {
    title: 'Design pulito',
    description: 'Interfacce chiare, ordinate e facili da leggere.',
  },
  {
    title: 'Supporto rapido',
    description: 'Assistenza base per avviare il progetto senza complicazioni.',
  },
];

export function FeaturesGrid() {
  const styleConfig = {
    section: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '20px',
      padding: '40px 32px',
    },
    card: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #d8e1ec',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
      textAlign: 'left',
    },
    title: {
      margin: '0 0 8px',
      color: '#1f2937',
    },
    description: {
      margin: 0,
      color: '#6b7280',
    },
  };

  return (
    <section id="servizi" className="features-grid" style={styleConfig.section}>
      {features.map((feature) => (
        <article className="feature-card" style={styleConfig.card} key={feature.title}>
          <h3 style={styleConfig.title}>{feature.title}</h3>
          <p style={styleConfig.description}>{feature.description}</p>
        </article>
      ))}
    </section>
  );
}

export default FeaturesGrid;
