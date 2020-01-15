import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import Inventory from './Inventory';
import { Switch, Route } from 'react-router-dom';
import './assets/css/styles.css';

function App() {
    return (
        <div className="app-page">
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/inventory">
                    <Inventory />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}



export default App