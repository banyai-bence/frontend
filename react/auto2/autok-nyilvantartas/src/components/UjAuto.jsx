import { useState } from "react";
import { felvesz, listaz } from "../data";

export function UjAuto({ setAutok }) {
  const [inputAuto, setInputAuto] = useState({
    rendszam: "",
    evjarat: 2026,
    fogyasztás: 6.2,
  });

  function handleSave() {
    felvesz(inputAuto);
    setAutok(listaz());
  }

  function inputChange(inputTarget, inputValue) {
    setInputAuto((prevInput) => {
      return {
        ...prevInput,
        [inputTarget]: inputValue,
      };
    });
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
                <input
                  type="text"
                  id="rendszam"
                  value={inputAuto.rendszam}
                  onChange={(event) =>
                    inputChange("rendszam", event.target.value)
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Evjarat:</td>
              <td>
                <input
                  type="number"
                  id="evjarat"
                  min="1900"
                  value={inputAuto.evjarat}
                  onChange={(event) =>
                    inputChange("evjarat", event.target.value)
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Fogyasztas</td>
              <td>
                <input
                  type="number"
                  id="fogyasztas"
                  min="0"
                  step="0.1"
                  value={inputAuto.fogyasztas}
                  onChange={(event) =>
                    inputChange("fogyasztas", event.target.value)
                  }
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
