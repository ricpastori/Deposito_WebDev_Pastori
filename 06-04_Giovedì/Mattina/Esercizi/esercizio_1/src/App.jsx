import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const isBannerVisible = count > 0 && count % 5 === 0

  const countIncrement = () => {
    setCount(count + 1)
  }

  const countHalf = () => {
    const newCount = Math.floor(count / 2)

    if (newCount < 1) {
      setCount(0)
      return
    }

    setCount(newCount)
  }

  

  return (
    <section id="center">
      <div className="btn-group">
        <button
          type="button"
          className="counter"
          onClick={countIncrement}
        >
          Count +1
        </button>
        <span>Count is {count}</span>
        <button
          type="button"
          className="counter"
          onClick={countHalf}
        >
          Count /2
        </button>
      </div>
      <div className={`banner ${isBannerVisible ? 'visible' : ''}`}>
        <span>Count is a multiple of 5!</span></div>
    </section>
  )
}

export default App
