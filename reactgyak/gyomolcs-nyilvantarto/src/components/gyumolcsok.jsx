import { listazgyumi, torol } from "../data"
import { Gyumolcs } from "./gyumolcs"

export function Gyumolcsok({gyumolcsok, setGyumolcsok}){
    function handleDel(nev){
        torol(nev)
        setGyumolcsok(listazgyumi())
    }
    return(
        <section id="lista">
            <div>
                {gyumolcsok.map(gyumi => (
                <Gyumolcs key={gyumi.nev} {...gyumi}
                onDel={() => handleDel(gyumi.nev)}/>
            ))}
            </div>
        </section>
    )
}