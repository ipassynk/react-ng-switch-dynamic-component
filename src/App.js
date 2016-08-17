import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyLayout from './MyLayout';

class App extends Component {
    constructor() {
        super();
        this.state = {layouts: ['div', 'p', 'pre', 'code', MyLayout]};
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                {this.state.layouts.map((layout, index) => {
                    let jsxdot = {layout};
                    return (
                        <div>
                            <jsxdot.layout key={index}><p>Rendered in {layout}</p></jsxdot.layout>
                            <hr/>
                        </div>
                    );
                })};

            </div >
        );
    }
}

export default App;
