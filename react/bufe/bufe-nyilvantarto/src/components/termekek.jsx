import { torol, lekerdez } from "../data";
import { Termek } from "./termek";

export function Termekek({ termekek, setTermekek }) {
    function handleDelete(id){
        torol(id);
        setTermekek(lekerdez());
    }
  return (
    <section>
      <h2>A termekek listaja</h2>
      <div>
        {termekek.map((k) => (
          <Termek 
            key={k.id}
            termeknev={k.termeknev}
            ar={k.ar} 
            kaloria={k.kaloria} 
            onDelete={() => handleDelete(k.id)}
            />
        ))}
      </div>
    </section>
  );
}
