let termekek=[
    {
        id: 1,
        termeknev: "narancs",
        ar: 400,
        kaloria: 2300,
    },
    {
        id: 5,
        termeknev: "banan",
        ar: 700,
        kaloria: 300,
    },
    {
        id: 34,
        termeknev: "korte",
        ar: 230,
        kaloria: 24500,
    },
    {
        id: 4,
        termeknev: "alma",
        ar: 344,
        kaloria: 5600,
    },
]


export function lekerdez(){
    return termekek;
}

export function felvesz(ujTermek){
    const randomID = Math.floor(Math.random()*100)+1
    const menthetoTermek = {id: randomID, ...ujTermek}

    termekek = [...termekek, menthetoTermek]
}

export function torol(id){
    termekek = termekek.filter(termek => id != termek.id)
}

