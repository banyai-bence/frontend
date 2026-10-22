export default function AutoComp({ auto }) {
    return (
        <div>
            <p>{auto.rendszam}</p>
            <p>{auto.evjarat}</p>
            <p>{auto.fogyasztas}</p>

            <button>Törlés</button>
        </div>
    )
}