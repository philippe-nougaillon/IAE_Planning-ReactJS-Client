// const BASE_URL = 'http://localhost:3030/';
// const BASE_URL = 'https://iae-test.philnoug.com/';
// const BASE_URL = 'https://planning.iae-paris.com/';
const BASE_URL = 'https://planning-iae.herokuapp.com/';

const REQUEST_URL = BASE_URL + "api/v2/cours.json?d=";

const fetchPlanning = query => 
        fetch(REQUEST_URL + query)
            .then(response => response.json());

export {
    BASE_URL,
    fetchPlanning,
};