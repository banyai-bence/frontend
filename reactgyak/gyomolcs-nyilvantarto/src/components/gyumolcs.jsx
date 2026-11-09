export function Gyumolcs({nev, rosttartalom, cukortartalom,onDel}){
    return(
        <div id="blokk">
            <h2>Név: {nev}</h2>
            <p>rosttartalom: {rosttartalom}</p>
            <p>cukortartalom: {cukortartalom}</p>
            <button onClick={onDel}>Törlés</button>
        </div>
    )
}