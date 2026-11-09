export function Termek({termeknev, ar, kaloria, onDel}){
    return(
        <div id="termekcss">
            <h2>Név: {termeknev}</h2>
            <p>ár: {ar} Ft</p>
            <p>kaloria: {kaloria} kcal</p>
            <button onClick={onDel}>Törlés</button>
        </div>
    )
}