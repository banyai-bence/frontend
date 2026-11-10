import { beszur, lekerdez } from "../data";

export function UjAllat({ setAllatok }) {
  function handleSave() {
    const fajta = document.getElementById("fajta").value;
    const taplalkozas = document.getElementById("taplalkozas").value;
    const eletkor = document.getElementById("eletkor").value * 1;

    beszur({
      fajta: fajta,
      taplalkozas: taplalkozas,
      eletkor: eletkor,
    });

    setAllatok(lekerdez());
  }
  return (
    <section id="uj-allat">
      <form>
        <h2>Új állat hozzáadása</h2>
        <table>
          <tbody>
            <tr>
              <td>Fajta: </td>
              <td>
                <input type="text" id="fajta" />
              </td>
            </tr>
            <tr>
              <td>Táplálkozás: </td>
              <td>
                <input type="text" id="taplalkozas" />
              </td>
            </tr>
            <tr>
              <td>Életkor: </td>
              <td>
                <input type="number" id="eletkor" min={0} />
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" onClick={handleSave}>
                  Mentés
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </section>
  );
}
