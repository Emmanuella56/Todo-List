import React, { useState } from 'react'
import TodoInput from './TodoInput'
import Note from './Note.jsx'
import Nav from './Nav.jsx'



const TodoList = () =>{

    const [input, setInput] = useState({
        title: "",
        content: ""
    })
    const [note, setNote] = useState([])

    const handleChange = (event) =>{
        const {name, value} = event.target

        setInput((prev) => {
            const updatedInput = {...prev, 
                    [name]: value} //The [name] turns the name from the key to the actual value
                   return updatedInput;
        
            
     })
      }

       function addInput(input){
        setNote((prev)=> [...prev, input])

        setInput(
            {
                title: "",
                content:""
            }
        )
        
      }

      const deleteItem = (id) =>{

        setNote((prev) => prev.filter((_, index) => index !== id ))
      }
      


    return(
        <>
        <Nav />

        <TodoInput
        input={input}
        handleChange={handleChange}
        onAdd={addInput}/>

        <Note 
        note={note}
        deleteItems={deleteItem}/>
        </>
        



    )
}

export default TodoList