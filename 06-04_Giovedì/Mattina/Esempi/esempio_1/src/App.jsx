import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  /* Questa funzione aumenta il count solamente di 1, ma non di 2 come ci si aspetterebbe, perché React raggruppa gli aggiornamenti dello stato e utilizza il valore precedente del count, che è ancora 0. Quindi, alla fine, il count viene aggiornato solo a 1 invece di 2. */
  const handleCount = () => {
    setCount(count + 1)
    setCount(count + 1)
  }

  /* Utilizzando le arrow function, invece, si accede al valore più aggiornato del count, poiché React passa il valore corrente del count come argomento alla funzione. In questo modo, il primo setCount aggiorna il count a 1 e il secondo setCount utilizza il nuovo valore di count (1) per aggiornare il count a 2. */
  const handleCountArrow = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  }

  const handleCountIncrement = () => {
    setCount((count) => count + 1)
  }

  const handleCountDecrement = () => {
    setCount((count) => count - 1)
  }

  return (
      <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={handleCount}
        >
          Count is {count}
        </button>
        <button
          type="button"
          className="counter"
          onClick={handleCountArrow}
        >
          Arrow Count is {count}
        </button>
      </section>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={handleCountIncrement}
        >
          Count +1
        </button>
        <span>
          Count is {count}
        </span>
        <button
          type="button"
          className="counter"
          onClick={handleCountDecrement}
        >
          Count -1
        </button>
      </section>
      </>
  )
}

export default App