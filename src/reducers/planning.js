const INITIAL_STATE = [
    {
        "debut":"2019-01-24T08:30:00.000Z",
        "fin":"2019-01-24T12:00:00.000Z",
        "hors_service_statutaire":false,
        "commentaires":"",
        "elearning":false,
        "duree_json":210.0,
        "salle_json":"D3",
        "matiere_json":"REUNION MAITRES D'APPRENTISSAGE CEBR ",
        "formation_json":"M1 CEBR  APP 2018/2019 - 5",
        "intervenant_json":"LALLEMAND-STEMPAK Nathalie"
    } , {
        "debut":"2019-01-24T09:00:00.000Z",
        "fin":"2019-01-24T16:00:00.000Z",
        "hors_service_statutaire":false,
        "commentaires":"",
        "elearning":false,
        "duree_json":420.0,
        "salle_json":"A8",
        "matiere_json":"cours ",
        "formation_json":"LICENCE DISTRISUP ",
        "intervenant_json":"A CONFIRMER"}
    ];

function planningReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        default: return state;
    }
}

export default planningReducer;