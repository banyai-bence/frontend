import { felvesz, lekerdez } from "../data";

export function UjTermek({termekek, setTermekek}){
    function handleSave(){
        const termeknev = document.getElementById("termeknev").value;
        const ar = document.getElementById("ar").value*1;
        const kaloria = document.getElementById("kaloria").value*1;

        felvesz({
            termeknev: termeknev,
            ar: ar,
            kaloria: kaloria
        })

        setTermekek(lekerdez())
        console.log(termekek)
    }
    return(
        <section id="uj-termek">
            <h2>Uj termek felvetele</h2>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Termeknév:</td>
                            <td><input type="text" id="termeknev" /></td>
                        </tr>
                        <tr>
                            <td>ár: </td>
                            <td> <input type="number" id="ar" min={0}/></td>
                        </tr>
                        <tr>
                            <td>kaloria: </td>
                            <td><input type="number" id="kaloria" min={0}/></td>
                        </tr>
                        <tr>
                            <td><button type="button" onClick={handleSave}>Mentés</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </section>
    )
}