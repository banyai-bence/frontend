import { lekerdez, felvesz } from "../data"

export function UjTermekek(setTermekek){
    function handleSave(){
        const nev = document.getElementById("termeknev").value*1
        const ar = document.getElementById("ar").value*1
        const kaloria = document.getElementById("kaloria").value*1

        felvesz({
            termeknev: nev,
            ar: ar,
            kaloria: kaloria
        })

        setTermekek(lekerdez());
    }
    return(
        <section>
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>Új autó felvétele:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Terméknév: </td>
                            <td><input type="text" id="termeknev"/></td>
                            
                        </tr>
                        <tr>
                            <td>Ár: </td>
                            <td><input type="number" min={0} id="ar"/></td>
                        </tr>
                        <tr>
                            <td>Kalória: </td>
                            <td><input type="number" min={0} id="kaloria"/></td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={handleSave}>Mentés</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </section>
    )
}