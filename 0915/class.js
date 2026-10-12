// az osztaly != objektum

class Szemely{
    constructor(nev, foglalkozas, szuletesiEv){
        this.nev = nev;
        this.foglalkozas = foglalkozas;
        this.szuletesiEv = szuletesiEv;
    }

    hanyEves(){
        const datum = new Date();
        return datum.getFullYear()-this.szuletesiEv;
    }
}

class Alkalmazott extends Szemely{
    static bonusz = 10;
    #azonosito = undefined;

    constructor(nev, foglalkozas, szuletesiEv, fizetes){
        super(nev, foglalkozas, szuletesiEv);
        this.fizetes=fizetes;
    }

    get azonosito() {return this.#azonosito; }
    set azonosito(azon){
        if( typeof(azon) == "number"){
            this.#azonosito=azon
        }
    }

    /* Fuggveny ami megmondja az e havi fizetest:
        - ha december van akkor az alapfizu + bonusz
        - kulonben: az alap fizetes
    */

    fizetesEbbenAHonapban(){
        if(new Date().getMonth() ==11)
            return this.fizetes*(1+(Alkalmazott.bonusz/100));
        return this.fizetes;
    }
}

let bela = new Szemely("Vak Bela", "kemenysepro", 1968);
console.log(`${bela.nev} ${bela.hanyEves()} éves`)

let irenke = new Alkalmazott("Kovács Irén", "recepciós", 1974, 489630);
irenke.azonosito = 123456;
irenke.azonosito="adsdaw";
console.log(irenke)
console.log(`${irenke.nev} fizetes: ${irenke.fizetesEbbenAHonapban()} forint`)





/* Készítsen egy Kisfonok osztályt, amely az Alkalmazott osztályból származik
    Készítse el az osztályhoz a konstruktort, illetve vegyen még fel plusszba egy tulajdonságot is:
    - hány beosztottja van (>=0 és <=20) a kisfőnöknek: ez csak lekérdezhető legyen, 
    beállítani, csak a konstruktorban lehet
*/

class Kisfonok extends Alkalmazott{
    constructor(nev,foglalkozas,szuletesiEv,fizetes,beosztottakszama){
        super(nev,foglalkozas,szuletesiEv,fizetes)
        this.beosztottakszama=beosztottakszama;
    }
}

let kisfonok = new Alkalmazott("papa", "kisfonok", 1954, 3434553,12);