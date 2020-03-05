import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


import TodosList from './components/TodosList'
import CreateTodo from './components/CreateTodo'
import EditTodo from './components/EditTodo'
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
    <div className="container">
    
        <Navbar/>
        <br/>
        <Route path="/" exact component={TodosList}/>
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/create" component={CreateTodo}/>
   
    </div>
    </Router>
  );
}

export default App;
