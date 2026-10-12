console.log(typeof(2));
console.log(typeof(3,14));
console.log(typeof(true));
console.log(typeof("EZ egy szoveg"));

// gyenges tipusos nyelv
console.log(3*"2");
console.log(3*"alma");
console.log(typeof(2*"alma"));

console.log(3+"2");
console.log(typeof(3+"2"));

let a = 3;
let b = "2";
console.log(a+parseInt(b)); //kezdo
console.log(a+b*1);

let n = null;   //ures
let u = undefined;  //most ures, de kesobb fel lesz toltve


//fuggvenyek
function udvozol(){
    console.log("Udvozollek");
}

const udv= function(){
    console.log("Udv");
}

const udv2= ()=> {console.log("Udv2")}

udvozol();
udv()
udv2();

function negyzetreemel(szam) {
    return szam*szam
}

const negyzet = n =>  n*n ;

console.log(negyzetreemel(2));
console.log(negyzet(2));

//tombok
let autok = ["Audi","BMW","Dacia","Ford","Toyota"];
console.log(autok[3]);
console.log(autok.at(3));

for( let i =0;i<autok.length; i++)
    console.log(autok[i]);


console.log(autok.findIndex(auto => auto == "BMW"));
console.log(autok.findIndex(auto => auto == "Honda"));  //findLastIndex()

//uj elem befuzese
autok.push('Honda');
autok.push('Fiat','Nissan');

// utolso elem torlese, vissza is adja
console.log(autok.pop());


//spread operator
let ujAutok = ["Mercedes",...autok, "Suzuki"];
console.log(ujAutok);

//szures - tombbol szur, visszaterese egy tomb
console.log(ujAutok.filter(auto => auto == "Honda" || auto == "Ford"));

// toroljuk ki az ujAutok-bol a honda-kat
ujAutok= ujAutok.filter(auto=> auto != "Honda");
console.log(ujAutok)

//tostring
console.log(autok.toString());
console.log(autok.join(">"));

//rendezes
console.log(autok.sort().reverse());

//numerikus tomb rendezese
let szamok = [8,2,3,9,11,0,2,1,4]

function osszehasonlit(a,b){
    return a-b;
}

console.log(szamok.sort( (a,b) => a-b));



// eldontes - tartalmazza-e 
console.log(ujAutok.includes("Ford"));
console.log(ujAutok.includes("Citroen"));
console.log(ujAutok.includes("Ford",8)); // N-edik indextol keres

//Osszefuzes
const aa = [1,2,3];
const bb = [3,5,6];
const c1 = aa.concat(bb);
console.log(c1);

const c2 = [...aa,...bb];
console.log(c2)

//keszitsunk fuggvenyt amely szamokat add ossze
function osszead(...numbers){
    let osszeg = 0
    for(let i=0;i<numbers.length;i++)
        osszeg+=numbers[i]

    return osszeg
}




console.log(osszead(2,7));
console.log(osszead(2,7,4));
console.log(osszead(2,7,4,2,5,6));

let szamok2= [2,7,8,3,4,2,5,5,2];
let sum = 0;
console.log(szamok2.forEach(x=> sum+=x));
console.log(sum);

// - - - - - - - - - - - 
let szamsor = [36, -2, 112, 101, 22];
/* 
1.) Adjunk hozzá 10 új, véletlen számokat a tömbhöz, [-100, +100]
2.) Szűrjük ki egy új tömbbe a pozitív páros számokat
3.) Döntsük el, hogy az új tömbbe van-e 100-nál nagyobb szám (true/false)
4.) Határozzuk meg az új tömb legnagyobb értékű elemét
5.) Rendezzük az új tömböt csökkenő sorrendbe
*/

//1
for(let i=0;i<10;i++){
    szamsor.push(Math.floor(Math.random()*200-100))
}
console.log(szamsor)


//2
let parosok=[];
for(let i = 0;i<szamsor.length;i++)
    if(szamsor[i]%2==0 && szamsor[i]>0)
        parosok.push(szamsor[i])

console.log(parosok);


//3
let nagyobb=false
for(let i = 0; i<parosok.length;i++)
    if(parosok[i] >100)
        nagyobb = true
    


console.log(nagyobb);
