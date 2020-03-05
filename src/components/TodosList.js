import React,{ Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Todo=props=>(
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
       
   </tr>
)

export default class TodosList extends Component {
    constructor(props){
        super(props);

        this.state={todos:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/todos/')
        .then(res=>{this.setState({todos:res.data})})
        .catch((error)=>console.log(error))
    }

 

    TodosList(){
        return this.state.todos.map(function(currentTodo,i){
            return <Todo todo={currentTodo}  key={i}/>
        })
    }
    render(){
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.TodosList()}
                    </tbody>

                </table>
            </div>
        )
    }
    
}
