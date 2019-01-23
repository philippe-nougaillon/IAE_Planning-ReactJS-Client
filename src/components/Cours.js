import React from 'react';
import './Cours.css';

const Cours = ({ cours }) => {
    const {
        debut,
        formation_json,
        matiere_json,
        salle_json
    } = cours;
    return(
        <div className="cours">
            | <span>{ debut }</span>
            | <span>{ formation_json }</span>
            | <span>{ matiere_json }</span>
            | <span>{ salle_json }</span>
            |
        </div>
    )
}

export default Cours;