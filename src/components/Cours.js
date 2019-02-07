import React from 'react';
import './Cours.css';

const Cours = ({ cours }) => {
    const {
        debut_fin_json_v2,
        formation_json_v2,
        matiere_json,
        intervenant_json,
        salle_json_v2,
    } = cours;

    return(
        <div className="cours">
            <span style= {{ width: '7%', fontWeight: 'bold' }}>
                { debut_fin_json_v2 }
            </span>
            <span style= {{ width: '30%', fontWeight: 'bold' }}>
                { formation_json_v2 }
            </span>
            <span  style= {{ width: '33%' }}>
                { matiere_json }
            </span>
            <span style= {{ width: '20%' }} >
                { intervenant_json }
            </span>
            <span style= {{ width: '10%' }} >
                { salle_json_v2 }
            </span>
        </div>
    )
}

export default Cours;