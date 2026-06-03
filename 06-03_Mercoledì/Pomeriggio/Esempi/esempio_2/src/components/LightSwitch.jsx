import { useState } from 'react';

export function LightSwitch() {
  // Istanziamo uno stato booleano impostato inizialmente a false
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    // Invochiamo il setter passando il valore opposto
    setIsOn(!isOn);
  };

  return (
    <div className="switch-card">
      <p>La luce è: <strong>{isOn ? "ACCESA" : "SPENTA"}</strong></p>
      <button onClick={toggleSwitch} className="btn-toggle" type="button">
        Interruttore
      </button>
    </div>
  );
}

export default LightSwitch;