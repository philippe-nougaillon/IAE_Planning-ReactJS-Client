//const BASE_URL = 'http://localhost:3000/';
const BASE_URL = 'https://planning-iae.herokuapp.com/';

const REQUEST_URL = BASE_URL + "api/v3/cours.json?d=";

const fetchPlanning = (query, page = 1) => 
        fetch(REQUEST_URL + query + "&page=" + page)
            .then(response => response.json());

export {
    BASE_URL,
    fetchPlanning,
};