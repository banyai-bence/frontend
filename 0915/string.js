let s = "Ez itt egy string";
let str = `ez
egy  ${3+2}
tobbsoros
nagyon
hosszu string`;  //alt gr + 7

console.log(s)

//tombkent is kezelheto
console.log(s[3]);
console.log(s.length)

console.log(s[52]); //undefined
console.log(s[-2]); //undefined

// string kezelo fuggveny
console.log(s.charAt(9));
console.log(s.charAt(-2)); // " "

console.log(s.at(7));
console.log(s.at(-2));

console.log(s.indexOf('e'));
console.log(s.lastIndexOf('g'));

console.log(s.includes("egy"));
console.log(s.includes("ketto")); //true:false

console.log(s.substring(9,12)); //mettol-meddig
console.log(s.substring(9)); //ettol- a vegeig

console.log(s.replace(" " , "-")); //csak az elsot
console.log(s.replaceAll(" " , "-"));

let nev = "  Özv. Kolompár Márija  ";
console.log(nev)
console.log(nev.trim()); //szokozt levagja , pl igy mentsuk el az adatokat

//konkatenacio
console.log(s + " még valami...");
console.log(s.concat(" még valami..."));

//modositas
s[0] = 'A';
console.log(s);
    //helyette
s= 'A' + s.substring(1);

s= s.substring(0,6) + 'X' + s.substring(7);
console.log(s)

//helykitoltes
let ora = 9;
let perc = 5;
console.log((ora+"").padStart(2, '0') + ":" + (perc+"").padStart(2, '0'));

//vagas
let adatok = "Sipi Rupi_Babolna_Tanulo_narancssarga";
let adatokStringTomb = adatok.split("_");
console.log(adatokStringTomb);



const jellemzok = [
    "Nagy Mária;164;59",
    "Kiss Géza;177.57;64.5",
    "Tóth Bianka;158.3;49",
    "Kálmán Béla;188.1;79",
    "Rácz Teréz;174.18;62.5",
];
/* Feladat:
Dolgozzuk fel a tömb elemeit!
A tömb minden egyes elemét vágjuk szét a 3 különböző információ mentén (név;magasság;súly)
Írjuk ki a konzolra soronként az egyes emberek tulajdonságát (helytöltő nullákra figyelni!)
Pl.: Név: Kiss Géza, Magasság: 177.57 cm, Súly: 64.50 kg
     Név: Nagy Mária, Magasság: 164.00 cm, Súly: 59.00 kg
*/


const convert = (adat, dig) => {
    if(!adat[1].includes('.'))
    adat[1] += '.';
    return adat[1].padEnd(dig, '0');
}

for(let i =0;i<jellemzok.length;i++){
    let adatok = jellemzok[i].split(";")
    console.log(`Nev: ${adatok[0]},
                Magasság: ${convert(adatok[1], 3)} cm,
                Suly: ${convert(adatok[2], 1)} kg`);
}

