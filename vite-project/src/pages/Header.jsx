import React from "react"
import { useContext} from "react"
import { GlobalContext } from "./GlobalContext"



  

const Header =(counts) =>{

    

    const {count, setCount} = useContext(GlobalContext)
    const [calculate, setCalculate] = useState(0)
  
      useEffect(() => {
       setCalculate(() =>  count * 2 );
      }, [count])
         
    
    return(
        <>
        <h1> Count: {counts} times </h1>
    <button 
    onClick={() => setCount(() => count + 1)}
    >+</button>
    <h1> Calculated : {calculate}</h1>
        </>
         
    )
}

export default Header