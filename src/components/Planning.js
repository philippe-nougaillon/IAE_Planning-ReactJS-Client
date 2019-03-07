import React from 'react';

import { connect } from 'react-redux';
import { getFiltredPlanning } from '../selectors/planning';

import Typography from '@material-ui/core/Typography';

import Cours from './Cours';

const mapStateToProps = state => ({
    planning: getFiltredPlanning(state.planningState.planning, state.filterState ),
    filter: state.filterState,
    error: state.planningState.error,

});

const Planning = ({ planning, error, filter }) =>
    <div className="planning">
        { error ? <p>Erreur...</p> 
                : planning.map(cours => 
                        <Cours key={cours.id} cours={cours}/>
                    )
        }
        <div className="footer">
            <Typography noWrap color="textSecondary" >
                { planning.length } cours
                { filter ? " (filtrés)" : " au total" }
            </Typography>
        </div>
    </div>

export default connect(
    mapStateToProps,
)(Planning);