import { lekerdez, torol } from "../data"
import { Termek } from "./termek"

export function Termekek({termekek, setTermekek}){
    function handleDel(id){
        torol(id);
        setTermekek(lekerdez());
    }
    return(
        <section id="termekek-listaja">
            <h1>A termekek listaja: </h1>
            <div>
                {termekek.map(termek => (
                    <Termek key={termek.id} {...termek}
                    onDel={() => handleDel(termek.id)}/>
                ))}
            </div>
        </section>
    )
}