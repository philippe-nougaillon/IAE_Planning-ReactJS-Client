import React from 'react';
import './App.css';

import Planning from './Planning';

const App = ({ liste_de_cours }) => 
    <div className="app">
        <Planning liste_de_cours={ liste_de_cours } />
    </div>


export default App;
