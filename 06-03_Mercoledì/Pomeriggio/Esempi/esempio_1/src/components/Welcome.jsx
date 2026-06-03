// Il componente figlio riceve l'oggetto props
export function Welcome(props) {
  return (
    <div className="welcome-banner">
      <h2>Benvenuto, {props.name}!</h2>
      <p>Messaggi non letti: {props.messageCount}</p>
    </div>
  );
}

export default Welcome