import { useState } from 'react'
import {lekerdez} from  "./data"
import { Termekek } from './components/termekek';
import { UjTermek } from './components/uj-termek';
import './App.css'

function App() {
  const [termekek, setTermekek] = useState(lekerdez());
  return(
    <>
    <main>
      <Termekek termekek= {termekek} setTermekek={setTermekek}/>
      <UjTermek termekek= {termekek} setTermekek={setTermekek}/>
    </main>
    </>
  )
}

export default App
