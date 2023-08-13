import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Padre from './Padre.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Padre/>
  )
}

export default App
