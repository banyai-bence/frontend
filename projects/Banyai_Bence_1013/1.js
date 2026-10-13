const $ = id => document.getElementById(id);
const Ł = id => document.createElement(id);

async function Generalas() {

    const url = `https://randomuser.me/api/`;

    const valasz = await fetch(url);
    const adat = await valasz.json();

    console.log(adat.results[0])

    kitoltes(adat)
}

function kitoltes(kapottAdat){

    const adatok = kapottAdat.results[0]
    const div = Ł("div")
    document.body.appendChild(div)
    

    const img = Ł("img");
    div.appendChild(img)
    $("kep").src = adatok.picture.large

    const h1 = Ł("h1");
    $("nev").innerText = adatok.name.title + " " + adatok.name.first + " " + adatok.name.last;
    div.appendChild(h1)

    const p1 = Ł("p");
    $("cim").innerText = "Address: " + adatok.location.country + ", " + adatok.location.city + ", " + adatok.location.street.name + " " + adatok.location.postcode;
    div.appendChild(p1)

    const p2 = Ł("p");
    $("email").innerText = "E-mail: " + adatok.email
    div.appendChild(p2)

    const p3 = Ł("p");
    div.appendChild(p3)

    if(adatok.id.value != null){
        $("azonosito").innerText = "ID: " + adatok.id.value
    }
    else{
        $("azonosito").innerText = "ID: -"
    }

}

$("general").addEventListener("click", Generalas);