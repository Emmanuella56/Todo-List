import React from 'react'
import { useState, useEffect, useContext} from "react"
import { GlobalContext } from './GlobalContext'


function Footer() {


    
    const {count, setCount} = useContext(GlobalContext)
    const [product, setProduct] = useState("Eggs")
    
    useEffect(()=>{
      console.log(`${product} will rule the world!`)
    })

    const users = useContext

      return (
        <div>
            <h1>Welcome</h1>
            <p>Customer you may know are </p>
          Current {product}'s count: {count}
          <div>
            <button onClick={(()=> setCount( count + 1))}>add to cart</button>
            <button onClick ={()=> setCount(count - 1)}>remove from cart</button>
            <div>
            <input type='text' onChange={(e)=>setProduct(e.target.value)}/>
            </div>
          </div>
        </div>
      )
    }
    
    export default Footer
    