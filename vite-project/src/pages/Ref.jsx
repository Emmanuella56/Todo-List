import React from "react";
import { useState, useEffect, useRef} from 'react'


const Ref = ()=>{

// First Set of example using useRef

const [inputValue, setInputValue] = useState('')

const count = useRef(0)

useEffect(()=>{
    count.current = inputValue;
//This shows thaat our useRef is an object that has current:0 => count={current:0}
    console.log(useRef)
})

//Second Set of example using useRef
// const inputElement = useRef()

// const focusInput = ()=>{
//     inputElement.current.focus()
// return( inputElement)
// }
    return(
        <>
        {/* First set of example below */}
        <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
        <h1>Our Normal Count: {inputValue}</h1>
        <h1>Our Ref Count: {count.current}</h1>
        
        {/* Second set of example below */}
        {/* <h1>what effect does useRef has on {inputElement.current}</h1>
        <input
        type="text"
        ref={inputElement}
        />
        <button onClick={focusInput}>Focus Input</button> */}
        </>

    )

} 

export default Ref