import axios from "axios"
import React from "react"
import {useEffect,useState} from "react"
import "./TodoEdit.css"

function TodoEdit (props){
    const [todo,setTodo] = useState(null)
    const [value,setValue] = useState('')
    const { id } = props.match.params
    const { history } = props

    useEffect(()=>{
        axios.get(`http://localhost:3000/todos/${id}`)
        .then(res => {
            setTodo(res.data)
            setValue(res.data.title)
          })
    },[id])

    const update = () =>{
        axios.put(`http://localhost:3000/todos/${id}`,{...todo,title:value})
        .then(()=>history.push('/'))
    }
    const remove = () =>{
        axios.delete(`http://localhost:3000/todos/${id}`)
        .then(()=>history.push('/'))
    }
    return todo && (
        <div>
      <input
        className ="input_edit"
        placeholder="title"
        value={value}
        onChange={event => setValue(event.target.value)}/>
      <button className="button_edit" onClick={update}>update</button>
      <button className="button_edit" onClick={remove}>remove</button>
    </div>

    )


}
export default TodoEdit