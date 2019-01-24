import React from 'react';
import './Planning.css';

import { connect } from 'react-redux';
//import { getReadablePlanning, getFetchError } from '../selectors/planning';

import Cours from './Cours';

const mapStateToProps = state => ({
    planning: state,
    //error: getFetchError(state),
});

const Planning = ({ planning }) =>
    <div className="planning">
        {(planning || []).map(cours => 
            <Cours 
                key={cours.id}
                cours={cours}
            />
        )}
    </div>

export default connect(
    mapStateToProps,
)(Planning);