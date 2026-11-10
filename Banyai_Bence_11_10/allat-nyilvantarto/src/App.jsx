import { useState } from "react";
import { lekerdez } from "./data";
import { Allatok } from "./components/allatok";
import { UjAllat } from "./components/ujallat";
import "./App.css";

function App() {
  const [allatok, setAllatok] = useState(lekerdez());

  return (
    <>
      <header>
        <h1>Állatok nyilvántartás</h1>
      </header>
      <main>
        <Allatok allatok={allatok} setAllatok={setAllatok} />
        <UjAllat allatok={allatok} setAllatok={setAllatok} />
      </main>
    </>
  );
}

export default App;
