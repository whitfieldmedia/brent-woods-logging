import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import Inventory from './Inventory';
import Contact from './Contact';
import Item from './Inventory/Item';
import { Switch, Route } from 'react-router-dom';
import './assets/css/styles.css';

export default function App(){
    return (
        <div className="app-page">
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop-inventory" component={Inventory} />
                <Route path="/for-sale" component={Item} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
        </div>
    )
}
