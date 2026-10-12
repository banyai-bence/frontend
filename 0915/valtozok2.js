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
let ujszamok=szamsor.filter( sz => sz>0 && sz%2==0);
console.log(ujszamok)


//3
console.log("van e 100-nal nagyobb szam: "+ (ujszamok.findIndex( sz => sz>100)>=0));

//4
console.log("Uj tomb legnagyobb eleme: "+ (Math.max(...ujszamok)));


//5
ujszamok = ujszamok.sort( (a,b) => b-a )
console.log(ujszamok)
    
