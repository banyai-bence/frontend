let termekek = [
    {
        id: 1,
        termeknev: "Hamburger",
        ar: 1200,
        kaloria: 550
    },
    {
        id: 2,
        termeknev: "Hot-dog",
        ar: 900,
        kaloria: 400
    },
    {
        id: 3,
        termeknev: "Sajtos szendvics",
        ar: 750,
        kaloria: 320
    },
    {
        id: 4,
        termeknev: "Coca-Cola",
        ar: 500,
        kaloria: 140
    }
];
export default (termekek[1].termeknev)

export function lekerdez(){
    return termekek;
}

export function felvesz(ujTermek){
    termekek = [...termekek, ujTermek];
}

export function torol(id){
    termekek = termekek.filter(k => k.id != id)
}