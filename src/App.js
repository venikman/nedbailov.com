import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Icon, List } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown';

import logo from './logo.svg';
import './App.css';

const Index = () => {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>WPLDev</h1>
        <List>
        <a href="https://www.twitter.com/venik_man">
        <Icon name='twitter' />
        </a>
        <a href="https://www.github.com/venikman">
        <Icon name='github' />
        </a>
        </List>
        </header>
        )
    }

    const Mark = () => {
        const input = '# This is a header\n\nAnd this is a paragraph'
        return (
            <ReactMarkdown source={input} />
        )
}

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>

                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={Mark} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
