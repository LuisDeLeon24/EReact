import { useState } from "react"

export const useCounter = () =>{
    const [counter,setcounter] = useState(0)

    const handleMasUno = () =>{
        setcounter(counter +1)
    }

    const handleMenosUno = () =>{
        setcounter(counter -1)
    }

    const handleReiniciar = () =>{
        setcounter(0)
    }

    return{
        counter,
        handleMasUno,
        handleMenosUno,
        handleReiniciar
    }
}