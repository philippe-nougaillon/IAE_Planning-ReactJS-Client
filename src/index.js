import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import * as serviceWorker from './serviceWorker';


const planning_cours = [
    {
        "debut":"2019-01-24T08:30:00.000Z",
        "fin":"2019-01-24T12:00:00.000Z",
        "hors_service_statutaire":false,
        "commentaires":"",
        "elearning":false,
        "duree_json":210.0,
        "salle_json":"D3",
        "matiere_json":"REUNION MAITRES D'APPRENTISSAGE CEBR ",
        "formation_json":"M1 CEBR  APP 2018/2019 - 5",
        "intervenant_json":"LALLEMAND-STEMPAK Nathalie"
    } , {
        "debut":"2019-01-24T09:00:00.000Z",
        "fin":"2019-01-24T16:00:00.000Z",
        "hors_service_statutaire":false,
        "commentaires":"",
        "elearning":false,
        "duree_json":420.0,
        "salle_json":"A8",
        "matiere_json":"cours ",
        "formation_json":"LICENCE DISTRISUP ",
        "intervenant_json":"A CONFIRMER"}
    ];


ReactDOM.render(
    <App 
        liste_de_cours={ planning_cours }
    />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
