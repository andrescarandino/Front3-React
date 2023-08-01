import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Principal from './Principal.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Principal/>
    <Footer/></>
  )
}

export default App
