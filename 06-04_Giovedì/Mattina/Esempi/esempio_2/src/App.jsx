import { useState } from 'react'
import './App.css'

function App() {
  const [lastAction, setLastAction] = useState("Nessuna");

  const handleAction = (type, value) => {
    setLastAction(`${type} con valore ${value}`);
  };

  return (
    <div className="event-box">
      <p>Ultimo click: {lastAction}</p>
      {/* Avvolgiamo la funzione in una callback anonima per ritardare l'avvio */}
      <button type="button" onClick={() => handleAction("Azione A", 100)}>Azione 1</button>
      <button type="button" onClick={() => handleAction("Azione B", 200)}>Azione 2</button>
    </div>
  );
}

export default App