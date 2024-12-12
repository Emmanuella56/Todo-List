import React from "react";
import { useState } from 'react'
import Todo from './Todo.jsx'


const CallBack = () =>{

    const [count, setCount] = useState(0)
    const [todo, setTodo] = useState([])
    const [newTodo, setNewTodo] = useState(false)

    const increment = () =>{
        setCount((c) => c + 1)
    }
    
    // const calculation = expensiveCalculation(count)
    // const handleClick = () =>{
        
    //     setNewTodo(() => !newTodo ? "start you new Todo List" : "Set you new Todo List");

    // // return
    // //         if(newTodo === true){
    // //             return "Set you new Todo List"
    // //         } else{
    // //             Set you new Todo List
    // //         }
        
    // }

    const addTodo = () =>{

        
    setNewTodo(() => 
        !newTodo ? "start your new Todo List" : "Set you new Todo List");
     
        return(
           setTodo((t) => [...t, newTodo]) 
        
        )
   
      
    }

    return(

        <div>
            <Todo  addTodo={addTodo} todo={todo} />
            <hr/>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            {/* <h1>Expensive Calculation</h1>
            {calculation} */}
        </div>

    )
}

export default CallBack