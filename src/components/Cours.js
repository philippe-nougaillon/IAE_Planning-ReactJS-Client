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
            <Grid container spacing={0}>
                <Grid item xs={12} sm={2}>
                    <Typography noWrap variant="h6">
                        <Link href={ cours_url } target="_blank" rel="noreferrer" color="inherit">
                            <b>
                                { debut_fin_json_v2.substring(0,5) }
                            </b>
                            { debut_fin_json_v2.substring(5,13) }
                        </Link>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography noWrap variant="h6">
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

                <Grid item xs={12} sm={2}>
                    <Typography noWrap>
                        <i>{ matiere_json }</i>
                    </Typography>
                </Grid>

                { etat !== "confirmé" &&
                    <Grid item xs={12} sm={1}>
                        <Typography noWrap style={{ textTransform: "capitalize" }} 
                                    color="secondary">
                            <i>{ etat }</i>
                        </Typography>
                    </Grid>
                }

                <Grid item xs={12} sm={1}>
                    <Typography style={{ color: '#122e4c' }} variant="h6">
                        <b>{ salle_json_v2 }</b>
                    </Typography>
                    { progress_bar_pct2
                        && etat === "confirmé"
                        && <LinearProgress variant="determinate" 
                                            value={ progress_bar_pct2 }  />
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Cours;