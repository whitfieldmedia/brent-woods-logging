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
import Cat559B13 from './Inventory/Cat559B13';
import Cat559C14 from './Inventory/Cat559C14';
import Cat559C15 from './Inventory/Cat559C15';
import Cat559C17 from './Inventory/Cat559C17';
import Deere648L15 from './Inventory/Deere648L15';
import Deere843K14 from './Inventory/Deere843K14';
import JLGForklift from './Inventory/JLGTelescopicForklift06';
import KomatsuDozer from './Inventory/KomatsuP3707';
import Tigercat640Clambunk from './Inventory/Tigercat640Clambunk2000';
import Tigercat724D05 from './Inventory/Tigercat724D05';
import Tigercat82204 from './Inventory/Tigercat82204';
import Deere437D from './Inventory/Deere437D16';
import Tigercat23414 from './Inventory/Tigercat23414';

function App() {
    return (
        <div className="app-page">
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/inventory" component={Inventory} />
                <Route path="/2013-Cat-563C" component={Cat563C13} />
                <Route path="/2014-John-Deere-843K" component={Deere843K14} />
                <Route path="/2015-Cat-525D" component={Cat525D15} />
                <Route path="/2013-Cat-545C" component={Cat545C13} />
                <Route path="/2000-Tigercat-640-Clambunk" component={Tigercat640Clambunk} />
                <Route path="/2014-Cat-559C" component={Cat559C14} />
                <Route path="/2015-Cat-559C" component={Cat559C15} />
                <Route path="/2004-Tigercat-822" component={Tigercat82204} />
                <Route path="/2007-Komatsu-P37" component={KomatsuDozer} />
                <Route path="/2006-JLG-Telescopic-Forklift" component={JLGForklift} />
                <Route path="/2015-John-Deere-648L" component={Deere648L15} />
                <Route path="/2005-Tigercat-724D" component={Tigercat724D05} />
                <Route path="/2017-Cat-559C" component={Cat559C17} />
                <Route path="/2013-Cat-559B" component={Cat559B13} />
                <Route path="/2016-John-Deere-437D" component={Deere437D} />
                <Route path="/2014-Tigercat-234" component={Tigercat23414} />
            </Switch>
            <Footer />
        </div>
    )
}



export default App