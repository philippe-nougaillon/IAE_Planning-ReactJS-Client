import React from 'react';
import './Planning.css';

import { connect } from 'react-redux';
import { getFiltredPlanning } from '../selectors/planning';

import Cours from './Cours';

const mapStateToProps = state => ({
    planning: getFiltredPlanning(state.planningState.planning, state.filterState ),
    error: state.planningState.error,
});

const Planning = ({ planning, error }) =>
    <div className="planning">

        { error ? <p>Something went wrong...</p> 
                : planning.map(cours => 
                                    <Cours key={cours.id} cours={cours}/>
                                )
        }

    </div>

export default connect(
    mapStateToProps,
)(Planning);