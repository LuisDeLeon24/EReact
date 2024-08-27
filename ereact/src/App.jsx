import { useCounter } from "./useCounter"
//import './style.css'
export const App = () =>{

    const {counter, handleMasUno, handleMenosUno, handleReiniciar} = useCounter()

    return(
        <>
            <h1>{counter}</h1>
            <button onClick={handleMasUno}>+1</button>
            <button onClick={handleMenosUno}>-1</button>
            <button onClick={handleReiniciar}>reset</button>

        </>
    )
}