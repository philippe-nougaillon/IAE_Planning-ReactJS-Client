import React from 'react';
import './App.css';

import AppBar from './AppBar';

import Planning from './Planning';
import SearchPlanning from './SearchPlanning';

const App = () => 
    <div className="app">
        <AppBar />
        <div className="interactions">
            <SearchPlanning />
        </div>
        <Planning />
    </div>

export default App;
