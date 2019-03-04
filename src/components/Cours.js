import React from 'react';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import 'typeface-roboto';

import './Cours.css';

const Cours = ({ cours }) => {
    const {
        id,
        debut_fin_json_v2,
        formation_json_v2,
        matiere_json,
        intervenant_json,
        salle_json_v2,
        progress_bar_pct2,
    } = cours;

    const url = "https://iae-test.philnoug.com/cours/" + id;

    return(
        <div className="cours">
            <Grid container spacing={8}>
                <Grid item xs={4} sm={1}>
                    <Typography noWrap>
                        <Link href={ url } target="_blank" rel="noreferrer" color="inherit">
                            <b>{ debut_fin_json_v2 }</b>
                        </Link>
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
                    { progress_bar_pct2 
                        ? <LinearProgress variant="determinate" value={ progress_bar_pct2 } />
                        : null 
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Cours;