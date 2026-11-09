import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Gyumolcsok } from './components/gyumolcsok'
import { listazgyumi } from './data'
import { UjGyumolcs } from './components/uj-gyumolcs'

function App() {
  const [gyumolcsok, setGyumolcsok] = useState(listazgyumi())

  return (
    <>
      <Gyumolcsok gyumolcsok={gyumolcsok} setGyumolcsok={setGyumolcsok}/>
      <UjGyumolcs gyumolcsok={gyumolcsok} setGyumolcsok={setGyumolcsok}/>
    </>
  )
}

export default App
