import { listaz } from "../metodusok";
import AutoComp from "./auto";
import { useState } from "react";

export default function AutokComp() {
    const [autok, setAutok] = useState(listaz());
    return (
        <>
            {autok.map(i =>(
                <AutoComp key={i.rendszam} auto={i}/>
            ))}
        </>
    )
}