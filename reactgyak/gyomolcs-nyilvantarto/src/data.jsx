let gyumolcsok = [
    {
        nev: "Alma",
        rosttartalom: 2.4,
        cukortartalom: 10.4,
    },
    {
        nev: "Banán",
        rosttartalom: 2.6,
        cukortartalom: 12.2,
    },
    {
        nev: "Eper",
        rosttartalom: 2.0,
        cukortartalom: 4.9,
    }
];

export function listazgyumi(){
    return gyumolcsok;
}

export function felvesz(ujgyumi){
    gyumolcsok = [...gyumolcsok, ujgyumi]
}

export function torol(gyumolcsnev){
    gyumolcsok= gyumolcsok.filter(gyumi => gyumi.nev != gyumolcsnev)
}

