import { useEffect, useState } from 'react';

export function LogEveryRender() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  // Nessun array di dipendenze fornito come secondo parametro
  useEffect(() => {
    console.log("Il componente si è ridisegnato. Testo corrente: " + text);
  }, [count]);

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Digita qualcosa..."
      />
      <button type="button" onClick={() => setCount(count + 1)}>Incrementa</button>
    </>
  );
}

export default LogEveryRender;