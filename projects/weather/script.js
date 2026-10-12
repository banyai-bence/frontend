const $ = id => document.getElementById(id)

const apiKey = "c512db0ab32c54bc4813a1bef9e70911"
const limit = 1;


async function Keresett(varosnev){
    const url= `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${varosnev}&limit=${limit}&appid=${apiKey}&units=metric`;
    const response = await fetch(url)
    const data = await response.json();

    let lat = data[0].lat
    let lon = data[0].lon

    const newUrl = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    const convresponse = await fetch(newUrl)
    const condata = await convresponse.json();
    fillTable(condata)
}

$("kereses").addEventListener("click", () =>{
    const varos = $("keresett").value;
    Keresett(varos)
})



let fillTable = (data) => {
    const wea = data.list;
    const ma = new Date();
    const holnap  = new Date();
    holnap.setDate(holnap.getDate() + 1)

    let mai = [];
    let holnapi = []

    for (let data of wea) {

        const datum = new Date(data.dt * 1000);

        if(ma.getDate() == datum.getDate()){
            mai.push(data.main.temp)
        } 

        else if(holnap.getDate() == datum.getDate()){
            holnapi.push(data.main.temp)
        }
        
    }
    for(let i = 0; i<mai.length;i++){

        let tr= document.createElement("tr");

        let maTd= document.createElement("td");
        maTd.innerText= mai[i]+ " C";
        tr.appendChild(maTd);

        let holnapTd = document.createElement("td");
        holnapTd.innerText = holnapi[i] + " C";
        tr.appendChild(holnapTd);

        $("tabla").appendChild(tr);
    }
}