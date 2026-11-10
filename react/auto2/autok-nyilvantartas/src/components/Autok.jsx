import { Auto } from "./Auto";
import { listaz, torol } from "../data";

export function Autok({autok, setAutok}){
    function handleDelete(rendszam){
        //1. torlunk a listabol
        torol(rendszam);
        //2. frissitjuk a state-et a lista alapjan
        setAutok(listaz());
    }

    return(
        <section id="autok">
            <h2>Autok listaja</h2>
            <div id="autok-items">
            {autok.map(auto => <Auto key={auto.rendszam}
            {...auto} onDelete={() => handleDelete(auto.rendszam)}/>)} 
            </div>
            
        </section>
    )
}