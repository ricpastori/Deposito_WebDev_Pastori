import { useState } from "react";
import { Child } from "./Child";

export function Father() {
  const [username, setUsername] = useState("marco");

  function gestisciUpdateNome(nomeRicevuto) {
    setUsername(nomeRicevuto)
  }

  return (
    <div>
      <p>Sono il padre</p>
      <Child username={username} onUpdateNome={gestisciUpdateNome} />
    </div>
  )
}