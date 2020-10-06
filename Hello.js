import React, { Component } from 'react';
import "./Hello.css";

class Hello extends Component {
    render(){
        return (
            <div className='f1 tc'> 
            // Use className instead of class here
            // Adding html inside React is called JSX
                <h1>Hello World</h1>
                <p>Welcome to React</p>
            </div>
            );
    }
}

export default Hello;