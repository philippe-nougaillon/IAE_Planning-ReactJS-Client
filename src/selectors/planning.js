const getFiltredPlanning = (planning, filter) =>

    planning.filter(cours => 
                    cours.formation_json_v2 && cours.formation_json_v2.toLowerCase().includes(filter) ||
                    cours.intervenant_json.toLowerCase().includes(filter)  ||
                    cours.matiere_json && cours.matiere_json.toLowerCase().includes(filter) ||
                    cours.salle_json_v2 && cours.salle_json_v2.toLowerCase().includes(filter)
                    );

export {
    getFiltredPlanning,
};