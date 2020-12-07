import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import React from "react"
import Todos from "./Todos"
import TodoEdit from "./TodoEdit"

function Todo(){
  
    
    return (
        

<Router>
<Switch>
  <Route path="/" component={Todos} exact />
  <Route path="/:id" component={TodoEdit} />
</Switch>
</Router>
    )
    
        

}
export default Todo