import { felvesz, listazgyumi } from "../data"

export function UjGyumolcs({setGyumolcsok}){
    function handleSave(){
        const nev = document.getElementById("nev").value
        const rost = document.getElementById("rosttartalom").value*1
        const cukor = document.getElementById("cukortartalom").value*1

        felvesz({
            nev: nev,
            rosttartalom: rost,
            cukortartalom: cukor
        })

        setGyumolcsok(listazgyumi())
    }
    return(
        <section id="form">
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Nev: </td>
                            <td><input type="text" id="nev" /></td>
                        </tr>
                        <tr>
                            <td>rosttartalom: </td>
                            <td><input type="number" id="rosttartalom" min={0} step={0.1}/></td>
                        </tr>
                        <tr>
                            <td>cukortartalom</td>
                            <td><input type="number" id="cukortartalom" min={0} step={0.1} /></td>
                        </tr>
                        <tr>
                            <td><button type="button" onClick={handleSave}>Mentes</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </section>
    )
}