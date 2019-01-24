import React from 'react';
import './Planning.css';

import { connect } from 'react-redux';
//import { getReadablePlanning, getFetchError } from '../selectors/planning';

import Cours from './Cours';

const mapStateToProps = state => ({
    planning: state.planning,
    error: state.error,
});

const Planning = ({ planning, error }) =>
    <div className="planning">

        { error && <p>Something went wrong :(</p> }

        {(planning || []).map(cours => 
            <Cours 
                key  ={cours.id}
                cours={cours}
            />
        )}
    </div>

export default connect(
    mapStateToProps,
)(Planning);