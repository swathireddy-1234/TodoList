import React, { useState } from "react"
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {task: task})
        .then(result >= console.log(result))
        .catch(err >= console.log(err))
    
    }
    return(
        <div>
           <input type="text"  placeholder="Enter Task"/>
           <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default   Create