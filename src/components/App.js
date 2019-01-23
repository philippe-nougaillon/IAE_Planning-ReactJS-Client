import React from 'react';
import './App.css';

import Planning from './Planning';
import SearchPlanning from './SearchPlanning';

const App = () => 
    <div className="app">
        <div className="interactions">
            <SearchPlanning />
        </div>
        <Planning />
    </div>

export default App;
