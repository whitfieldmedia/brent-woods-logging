import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import Inventory from './Inventory';
import { Switch, Route } from 'react-router-dom';
import './assets/css/styles.css';
import Cat563C13 from './Inventory/Cat563C13';
import Cat525D15 from './Inventory/Cat525D15';
import Cat545C13 from './Inventory/Cat545C13';
import Cat559C14 from './Inventory/Cat559C14';
import Cat559C15 from './Inventory/Cat559C15';
import Cat559C17 from './Inventory/Cat559C17';
import Deere648L15 from './Inventory/Deere648L15';
import JLGForklift from './Inventory/JLGTelescopicForklift06';
import KomatsuDozer from './Inventory/KomatsuP3707';
import Tigercat640Clambunk from './Inventory/Tigercat640Clambunk2000';
import Tigercat724D05 from './Inventory/Tigercat724D05';
import Deere437D from './Inventory/Deere437D16';
import Cat620E15 from './Inventory/Cat620E15';
import Deere437D162 from './Inventory/Deere437D162';
import Deere437E18 from './Inventory/Deere437E18';
import Deere643l17 from './Inventory/Deere643l17';
import Deere648l16 from './Inventory/Deere648l16';
import Deere648L18 from './Inventory/Deere648L18';

function App() {
    return (
        <div className="app-page">
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/inventory" component={Inventory} />
                <Route path="/2013-Cat-563C" component={Cat563C13} />
                <Route path="/2015-Cat-525D" component={Cat525D15} />
                <Route path="/2013-Cat-545C" component={Cat545C13} />
                <Route path="/2000-Tigercat-640-Clambunk" component={Tigercat640Clambunk} />
                <Route path="/2014-Cat-559C" component={Cat559C14} />
                <Route path="/2015-Cat-559C" component={Cat559C15} />
                <Route path="/2007-Komatsu-P37" component={KomatsuDozer} />
                <Route path="/2006-JLG-Telescopic-Forklift" component={JLGForklift} />
                <Route path="/2015-John-Deere-648L" component={Deere648L15} />
                <Route path="/2005-Tigercat-724D" component={Tigercat724D05} />
                <Route path="/2017-Cat-559C" component={Cat559C17} />
                <Route path="/2016-John-Deere-437D" component={Deere437D} />
                <Route path="/2015-Cat-620E" component={Cat620E15} />
                <Route path="/2016-John-Deere-437D2" component={Deere437D162} />
                <Route path="/2018-John-Deere-437E" component={Deere437E18} />
                <Route path="/2017-John-Deere-643L" component={Deere643l17} />
                <Route path="/2016-John-Deere-648L" component={Deere648l16} />
                <Route path="/2018-John-Deere-648L" component={Deere648L18} />
            </Switch>
            <Footer />
        </div>
    )
}



export default App
