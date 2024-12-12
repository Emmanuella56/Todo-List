import React from "react";

const Note = ({ note, deleteItems}) =>{

    return(
    <div> 
       { note.map((item, index) => (
                <div key={index}>
                 <p>{item.title}</p>
                <p> {item.content}</p>
                <button 
                onClick={()=> (deleteItems(index))}
                id={index}>del</button>
                </div>  
            ))
        }
        
    
    
</div>
    )
}

export default Note