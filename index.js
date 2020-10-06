import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import 'tachyons';
import {robots} from './robots';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
    </div>,
    document.getElementById('root')
    )
registerServiceWorker();

ReactDOM.render(
    <h1> Hello World </h1>,
    document.getElementById('root')
    )
registerServiceWorker();

//Import version:
import Hello from './Hello';
ReactDOM.render(<Hello />, document.getElementById('root'));

ReactDOM.render(<Hello greeting={'Hello' + 'React Ninja'}/>, document.getElementById('root'));
In Hello.js <p> {this.props.greeting}</p>

//Before:
import App from './App'; //没有后缀的时候，其实就是默认js后缀，所以它等同于import App from './App.js'
ReactDOM.render(<App />, document.getElementById('root')))


