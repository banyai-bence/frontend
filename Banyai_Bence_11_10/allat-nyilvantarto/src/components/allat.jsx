export function Allat({ fajta, taplalkozas, eletkor, onDel }) {
  return (
    <div className="blokk">
      <h2>Fajtája: {fajta}</h2>
      <p>Táplálkozása: {taplalkozas}</p>
      <p>Életkora: {eletkor}</p>
      <button onClick={onDel}>Törlés</button>
    </div>
  );
}
