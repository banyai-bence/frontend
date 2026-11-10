let allatok =[
    {
        fajta: "cica",
        taplalkozas: "husevo",
        eletkor: 3,
    },
    {
        fajta: "kutya",
        taplalkozas: "husevo",
        eletkor: 6,
    },
    {
        fajta: "diszno",
        taplalkozas: "mindenevo",
        eletkor: 5,
    },
];

export function lekerdez(){
    return allatok;
}

export function beszur(ujAllat){
    if(allatok.find(allat=> allat.fajta == ujAllat.fajta))
        return;
    allatok = [...allatok, ujAllat];
}

export function torol(fajta){
    allatok= allatok.filter(allat => allat.fajta != fajta);
}