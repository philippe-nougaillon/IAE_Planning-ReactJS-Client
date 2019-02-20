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
            <span style= {{ width: '7%' }}>
                { debut_fin_json_v2 }
            </span>
            <span style= {{ width: '30%' }}>
                { formation_json_v2 }
            </span>
            <span  style= {{ width: '33%', fontWeight: 'lighter' }}>
                { matiere_json }
            </span>
            <span style= {{ width: '20%', fontWeight: 'lighter' }} >
                { intervenant_json }
            </span>
            <span style= {{ width: '10%', fontWeight: 'lighter' }} >
                { salle_json_v2 }
            </span>
        </div>
    )
}

export default Cours;