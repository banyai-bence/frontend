import { Auto } from "./Auto";

export function listaz(){
    return Auto;
}

export function felvesz(ujAuto){
    Auto.push(ujAuto)
}

export function torol(rendszam){
    for(let i of Auto){
        if(i.rendszam === rendszam){
            Auto.splice(Auto.indexOf(i, 1))
            break
        }
    }
}