import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <html>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Heebo&display=swap" rel="stylesheet"></link>
      </head>
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </html>
  );
}

export default App;