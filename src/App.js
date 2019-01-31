import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>WPLDev</h1>
                    <a href="https://www.twitter.com/venik_man">
                        <Icon name='twitter' />
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
