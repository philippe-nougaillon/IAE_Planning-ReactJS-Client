import React from 'react';
import './Planning.css';

import { connect } from 'react-redux';
import { getFiltredPlanning } from '../selectors/planning';

import Cours from './Cours';

const mapStateToProps = state => ({
    planning: state.planningState.planning,
    filter: state.filterState,
    error: state.planningState.error,
});

const Planning = ({ planning, filter, error }) =>
    <div className="planning">
        <h2>{ filter }</h2>

        { error && <p>Something went wrong :(</p> }

        {getFiltredPlanning(planning, filter)
            .map(cours => 
                <Cours 
                    key  ={cours.id}
                    cours={cours}
                />
            )
        }
    </div>

export default connect(
    mapStateToProps,
)(Planning);