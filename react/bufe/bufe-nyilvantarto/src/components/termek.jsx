export function Termek({ termeknev, ar, kaloria, onDelete }) {
  return (
    <div>
      <h2>Név: {termeknev}</h2>
      <p>Ár: {ar} Ft</p>
      <p>Kalória: {kaloria} kcal</p>
      <button onClick={onDelete}>Törlés</button>
    </div>
  );
}
