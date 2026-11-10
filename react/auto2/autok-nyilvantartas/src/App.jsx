import { useState } from "react";
import "./App.css";
import { listaz } from "./data.jsx";
import { Autok } from "./components/Autok.jsx"
import { UjAuto } from "./components/UjAuto.jsx";

function App() {
    const [autok, setAutok] = useState(listaz());

    return (
        <>
            <header>
                <h1>Auto Nyilvantartas</h1>
            </header>

            <main>
                <Autok autok={autok} setAutok={setAutok} />
                <UjAuto autok={autok} setAutok={setAutok}/>
            </main>
        </>
    );
}

export default App;