import React from 'react';
import './App.css';

import AppBar from './AppBar';

import SearchPlanning from './SearchPlanning';
import Planning from './Planning';

const App = () => 
    <div className="app">
        <AppBar />
        <div className="interactions">
            <SearchPlanning />
        </div>
        <Planning />
    </div>

export default App;
