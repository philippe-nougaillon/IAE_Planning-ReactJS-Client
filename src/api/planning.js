const BASE_URL = 'https://planning.iae-paris.com/api/v2/cours.json?d=';

// const BASE_URL = 'https://iae-test.philnoug.com/api/v2/cours.json?d=';
// const BASE_URL = 'http://localhost:3030/api/v2/cours.json?d=';

const fetchPlanning = query => 
        fetch(BASE_URL + query)
            .then(response => response.json());

export {
    fetchPlanning,
};