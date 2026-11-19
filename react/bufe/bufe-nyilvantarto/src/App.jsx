import { useState } from 'react'
import { lekerdez } from './data';
import { Termekek } from './components/termekek';
import './App.css'
import { UjTermekek } from './components/uj-termek';

function App() {
    const [termekek, setTermekek] = useState(lekerdez());
    return(
        <>
            <main>
                <Termekek 
                    termekek={termekek}
                    setTermekek = {setTermekek}
                />
                <UjTermekek
                    termekek={termekek}
                    setTermekek = {setTermekek}
                />
            </main>
        </>
    )
}

export default App
