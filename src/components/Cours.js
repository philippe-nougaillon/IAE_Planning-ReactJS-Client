import React from 'react';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import './Cours.css';

import { BASE_URL } from '../api/planning';

const Cours = ({ cours }) => {
    const {
        id,
        etat,
        debut_fin_json_v2,
        formation_json_v2,
        formation_color_json_v2,
        matiere_json,
        intervenant_json,
        salle_json_v2,
        progress_bar_pct2
    } = cours;

    const cours_url = BASE_URL + "cours/" + id;

    return(
        <div className="cours">
            <Grid container spacing={4}>

                <Grid item xs={4} sm={1}>
                    <Typography noWrap color="primary">
                        <Link href={ cours_url } target="_blank" rel="noreferrer" color="inherit">
                            <b>{ debut_fin_json_v2 }</b>
                        </Link>
                    </Typography>
                </Grid>

                <Grid item xs={8} sm={4}>
                    <Typography noWrap>
                        <span style={{ background: formation_color_json_v2, 
                                        padding: 3, 
                                        marginRight: 5
                                     }}>
                        </span>
                        <b>{ formation_json_v2 }</b>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Typography noWrap>
                        { intervenant_json }
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Typography noWrap>
                        <i>{ matiere_json }</i>
                    </Typography>
                </Grid>

                { etat != "confirmé" &&
                    <Grid item xs={12} sm={1}>
                        <Typography noWrap style={{ textTransform: "capitalize" }} 
                                    color="secondary">
                            <i>{ etat }</i>
                        </Typography>
                    </Grid>
                }

                <Grid item xs={3} sm={1}>
                    <Typography color="primary">
                        <b>{ salle_json_v2 }</b>
                    </Typography>
                    { progress_bar_pct2
                        && <LinearProgress variant="determinate" 
                                            value={ progress_bar_pct2 } 
                                            color="secondary" />
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Cours;