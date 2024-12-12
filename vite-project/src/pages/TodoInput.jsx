import React from 'react'


const TodoInput = ({handleChange, input, onAdd}) =>{
    
    const handleClick = (event) => {
      onAdd(input)

     
           event.preventDefault();
          
         }


return(
<div> 
    <form onSubmit={handleClick}>
    <input name='title' onChange={handleChange} value={input.title} placeholder="Title"></input>
    <textarea name='content' onChange={handleChange} value={input.content} placeholder="Take a note..."></textarea>
    <button type='submit'>add</button>
    </form>
    
</div>
    )
}

export default TodoInput