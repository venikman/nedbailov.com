import React, { lazy, Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Icon, List } from 'semantic-ui-react';
import { importMDX } from 'mdx.macro';
import HighLightCode from './mark-down-utils/high-light-code.jsx';
import logo from './logo.svg';
import './App.css';

const exampleCode = `
import React from 'React';

const Foo = () => {
    return (
        <p>
            Quisquam doloremque incidunt facere qui sunt.
        </p>
        )
    }
    `;
const Mark = () => {
  const Content = lazy(() => {
    return importMDX('./content.mdx');
  });
  return (
    <div>
      <Link to="/">Home</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
      <HighLightCode code={exampleCode} language="js" />
    </div>
  );
};

const Index = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>WPLDev</h1>
      <List>
        <a href="https://www.twitter.com/venik_man">
          <Icon name="twitter" />
        </a>
        <a href="https://www.github.com/venikman">
          <Icon name="github" />
        </a>
      </List>

      <Link to="/about">
        <Icon.Group size="big">
          <Icon loading size="large" name="spinner" />
          <Icon name="server" size="tiny" />
        </Icon.Group>
      </Link>
    </header>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about" component={Mark} />
      </Switch>
    </Router>
  );
};

export default App;
