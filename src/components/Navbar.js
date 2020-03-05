import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class  Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">TodoApp</Link>
                      
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link to="/" className="nav-link" >Todos <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/create" className="nav-link">create Todo</Link>
                        </li>

                    </ul>
                </div>
              
          </nav>
        )
    }
    
}
