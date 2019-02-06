import React from 'react';
import './Cours.css';

const Cours = ({ cours }) => {
    const {
        debut,
        fin,
        formation_json,
        matiere_json,
        intervenant_json,
        salle_json,
    } = cours;

    return(
        <div className="cours">
            <span style= {{ width: '10%' }}>
                <b>{ debut.substring(11,16) }</b> - { fin.substring(11,16) }
            </span>
            <span style= {{ width: '35%', fontWeight: 'bold' }}>
                { formation_json }
            </span>
            <span  style= {{ width: '25%' }}>
                { matiere_json }
            </span>
            <span style= {{ width: '20%' }} >
                { intervenant_json }
            </span>
            <span style= {{ width: '10%' }} >
                { salle_json }
            </span>
        </div>
    )
}

export default Cours;