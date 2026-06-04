import { useState } from 'react'
import LogEveryRender from './components/LogEveryRender'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LogEveryRender />
    </>
  )
}

export default App
