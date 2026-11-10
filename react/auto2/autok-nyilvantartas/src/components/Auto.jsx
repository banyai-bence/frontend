export function Auto({rendszam, evjarat, fogyasztas, onDelete}){
    return(
        <div className="auto">
            <p>Rendszam: <b>{rendszam}</b></p>
            <p>Evjarat: {evjarat}</p>
            <p>Fogyasztas: {fogyasztas} L</p>
            <button onClick={onDelete}>Torles</button>
        </div>
    );
}