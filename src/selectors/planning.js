function getFiltredPlanning(planning, filter) {
            
    return  planning.filter(cours => 
        cours.formation_json_v2.toLowerCase().includes(filter.toLowerCase()) ||
        cours.intervenant_json.toLowerCase().includes(filter.toLowerCase()) ||
        cours.salle_json_v2.toLowerCase().includes(filter.toLowerCase())
        )
}

export {
    getFiltredPlanning,
};