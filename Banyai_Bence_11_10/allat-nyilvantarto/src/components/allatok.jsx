import { lekerdez, torol } from "../data";
import { Allat } from "./allat";

export function Allatok({ allatok, setAllatok }) {
  function handleDelete(fajta) {
    torol(fajta);
    setAllatok(lekerdez());
  }
  return (
    <section id="listazott-allat">
      <div>
        {allatok.map((allat) => (
          <Allat
            key={allat.fajta}
            {...allat}
            onDel={() => handleDelete(allat.fajta)}
          />
        ))}
      </div>
    </section>
  );
}
