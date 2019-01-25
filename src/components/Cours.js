import React from 'react';
import './Cours.css';

const Cours = ({ cours }) => {
    const {
        debut,
        fin,
        formation_json,
        matiere_json,
        salle_json
    } = cours;

    return(
        <div className="cours">
            <span style= {{ width: '10%' }}>
                <b>{ debut.substring(11,16) }</b> - { fin.substring(11,16) }
            </span>
            <span style= {{ width: '30%', fontWeight: 'bold' }}>
                { formation_json }
            </span>
            <span  style= {{ width: '40%' }}>
                { matiere_json }
            </span>
            <span style= {{ width: '5%', fontWeight: 'bold' }}>
                { salle_json }
            </span>
        </div>
    )
}

export default Cours;