const BASE_URL = 'https://iae-test.philnoug.com/api/v2/cours.json?d=';


const fetchPlanning = query => 
        fetch(BASE_URL + query)
            .then(response => response.json());

export {
    fetchPlanning,
};