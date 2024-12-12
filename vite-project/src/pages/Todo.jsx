import React from 'react'
// import { memo } from 'react'


const Todo = ({todo, addTodo}) =>{

    console.log(todo, addTodo)

    return(
        <div>
            {todo.map((todos, index) =>  <p key={index}>{todos}</p>
            )}
            <button onClick={addTodo}>Todo</button>
        </div>

    )
}

export default Todo