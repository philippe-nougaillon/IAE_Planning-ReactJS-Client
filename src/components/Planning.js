import React from 'react';
import './Planning.css';

import Cours from './Cours';

const Planning = ({ liste_de_cours }) =>
    <div className="planning">
        {(liste_de_cours || []).map(cours => 
            <Cours 
                key={cours.id}
                cours={cours}
            />
        )}
    </div>

export default Planning;