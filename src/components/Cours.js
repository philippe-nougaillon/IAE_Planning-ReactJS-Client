import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

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
            <Grid container spacing={8}>
                <Grid item xs={4} sm={1}>
                    <Typography noWrap>
                        <b>{ debut_fin_json_v2 }</b>
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={3}>
                    <Typography noWrap>
                        <b>{ formation_json_v2 }</b>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography noWrap>
                        { intervenant_json }
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography noWrap>
                        <i>{ matiere_json }</i>
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Typography color="primary">
                        <b>{ salle_json_v2 }</b>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cours;