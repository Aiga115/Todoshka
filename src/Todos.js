import React from "react"
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Ph from "./images/ph.png"
import Ph2 from "./images/ph2.png"
import Ph3 from "./images/ph3.png"
import P4 from "./images/p4.png"
import "./Todos.css"
function Todos (props){

    const [todos,setTodos] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/todos')
          .then(res => res.json())
          .then(data => setTodos(data))
      }, [])


      const create = () => {
        if (value.trim().length === 0) return
    
        axios.post('http://localhost:3000/todos', { title: value, done: false })
          .then(res => setTodos([...todos, res.data]))
          .then(() => setValue(''))
      }
    
      if (todos.length === 0) return 'Loading ...'
    


    return (
    
            <div className = "mainPage">
            <img src= {Ph} className="ph1" alt="ph.png"></img>

            <div className ="mainPage__header">
                <div className = "mainPAge__header__form">
                <h1>Start your journey to space...</h1>
                <p>Your dreams are there.
                    Click on a task if you want to edit and delete it
                </p>
                <div>
                <input value = {value} className="input_button" placeholder="Create todo" onChange={event=>setValue(event.target.value)} />
                <button onClick ={create}>Add</button>
            </div>
                </div>
                
            <div>
    {todos.map(todo=>
    <div className= "todos_result">
      <div className ="ulchik"> <ul> <li key={todo.id}><Link to ={`/${todo.id}`}>{todo.title}</Link></li></ul></div>
       <input type = "checkbox" className = "input_checkbox"></input>
    </div>
    )}
            </div>

            </div>
            
            <img src= {Ph2} className="ph2" alt="ph2.png"></img>
            <img src = {Ph3} className ="ph3" alt="ph3.png"></img>
            <img src = {P4} className ="p4" alt="p4.png"></img>
           


        </div>
           
        
    )
}
export default Todos