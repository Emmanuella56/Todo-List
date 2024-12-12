import React from "react"
import { createContext, useState} from "react"
// import Index from 'Index.jsx'
  



export const GlobalContext = createContext('')



 const GlobalContextProvider = ({children}) =>{
    
    const [count, setCount] = useState(0)
  
    return(
        <GlobalContext.Provider value={{count, setCount, }}>
            {children}
        </GlobalContext.Provider>
    )
 }

 export default GlobalContextProvider