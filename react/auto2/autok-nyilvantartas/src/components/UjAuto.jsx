import { felvesz, listaz } from "../data";
import { useRef } from "react";

export function UjAuto({ setAutok }) {
  const inputAuto = {
    rendszam: useRef(),
    evjarat: useRef(),
    fogyasztas: useRef()
  };

  function handleSave() {
    felvesz({
      rendszam: inputAuto.rendszam.current.value,
      evjarat: inputAuto.evjarat.current.value,
      fogyasztas: inputAuto.fogyasztas.current.value,
    });
    setAutok(listaz());
  }

  return (
    <section id="uj-autok">
      <h2>Uj auto felvetele</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Rendszam:</td>
              <td>
                <input type="text" ref={inputAuto.rendszam} />
              </td>
            </tr>
            <tr>
              <td>Evjarat:</td>
              <td>
                <input type="number" min="1900" ref={inputAuto.evjarat} />
              </td>
            </tr>
            <tr>
              <td>Fogyasztas</td>
              <td>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  ref={inputAuto.fogyasztas}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="button" onClick={handleSave}>
                  Mentes
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </section>
  );
}
