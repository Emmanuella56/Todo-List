import React from "react";
import { useState, useEffect } from 'react'
// import { GlobalContext } from "./GlobalContext";


const Effect = () =>{

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    
    const outComeEvent = e => {
        console.log('outComeEvent console')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {

        console.log("effect outcome")
        window.addEventListener('Is an event carried out', outComeEvent)
    //   console.log(window)
    })
    


    return (
        <div>
            Hook X - {x} Y - {y}
        </div>

    )
}

export default Effect