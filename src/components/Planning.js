import React from 'react';

import { connect } from 'react-redux';
import { getFiltredPlanning } from '../selectors/planning';

import Typography from '@material-ui/core/Typography';

import Cours from './Cours';

const mapStateToProps = state => ({
    planning: getFiltredPlanning(state.planningState.planning, state.filterState ),
    size: state.planningState.size,
    filter: state.filterState,
    error: state.planningState.error,

});

const Planning = ({ planning, size, error, filter }) =>
    <div className="planning">
        { error && <p>Oups ! Les données n'ont pas pu être chargées...</p> } 
        
        {   planning.map(cours => 
                <Cours key={cours.id} cours={cours}/>
            )
        }

        <div className="footer">
            <Typography noWrap color="textSecondary" >
                { planning.length } cours
                { filter && ` (filtrés) sur ${ size }` } au total
            </Typography>
        </div>
    </div>

export default connect(
    mapStateToProps,
)(Planning);