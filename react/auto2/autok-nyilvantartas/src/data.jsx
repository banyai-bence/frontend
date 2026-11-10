
let AUTOK = [
    {
        rendszam: 'ABC-123',
        evjarat: 2018,
        fogyasztas: 6
    },
    {
        rendszam: 'KLM-482',
        evjarat: 2021,
        fogyasztas: 5
    },
    {
        rendszam: 'RTY-905',
        evjarat: 2015,
        fogyasztas: 7
    }
]

export function listaz() {
    return AUTOK;
}

export function felvesz(ujauto) {
    AUTOK = [...AUTOK, ujauto]
}

export function torol(rendszam) {
    AUTOK = AUTOK.filter(a => a.rendszam != rendszam);
}