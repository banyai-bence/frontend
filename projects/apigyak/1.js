const $ = id => document.getElementById(id);
const Ł = id => document.createElement(id);

async function Kereses() {
    const search = $("keresett").value.trim();

    const url = `https://api.tvmaze.com/search/shows?q=${search}`;

    const valasz = await fetch(url);
    const adat = await valasz.json();

    console.log(adat)
    fill(adat)
}

function fill(kapottAdat){
    const tbody = $("eredmenyek");

    tbody.innerHTML = "";

    for(let adat of kapottAdat){
        const sorozat = adat.show;

        const tr = Ł("tr");
        tbody.appendChild(tr);

        const td = Ł("td");
        td.innerText = sorozat.name;
        tr.appendChild(td);

        const tdKep = Ł("td");
        tr.appendChild(tdKep)
        if(sorozat.image){
            const img = Ł("img");
            tdKep.appendChild(img);
            img.src = sorozat.image.medium 
        }
        else{
            tdKep.innerText = "Nincs kep"
        }
    }
}

$("kereses").addEventListener("click", Kereses)
$("keresett").addEventListener("keypress", event => {
    if(event.key == "Enter"){
        Kereses();
    }
})