const formComments = document.querySelector('#formComments input[type="submit"]');
const formContacts = document.querySelector('#formContacts input[type="submit"]');
const formProducts = document.querySelector('#formProducts input[type="submit"]');
const formVehicles = document.querySelector('#formVehicles input[type="submit"]');
const URL = 'http://localhost:4000';

window.addEventListener('load', () => {
    retrieveComments();
    retrieveContacts();
    retrieveProducts();
    retrieveVehicles();
});

formComments.addEventListener('click', e => {
    const data = Object.fromEntries(new FormData(document.forms[0]));

    e.preventDefault();
    axios.post(`${URL}/comments`, data).then(retrieveComments);
});

formContacts.addEventListener('click', e => {
    const data = Object.fromEntries(new FormData(document.forms[1]));

    e.preventDefault();
    axios.post(`${URL}/contacts`, data).then(retrieveContacts);
});

formProducts.addEventListener('click', e => {
    if (!document.forms[2].checkValidity()) return;

    const data = Object.fromEntries(new FormData(document.forms[2]));

    data.rating = parseInt(data.rating, 10);

    e.preventDefault();
    axios.post(`${URL}/products`, data).then(retrieveProducts);
});

formVehicles.addEventListener('click', e => {
    if (!document.forms[3].checkValidity()) return;

    const data = Object.fromEntries(new FormData(document.forms[3]));

    data.km = parseFloat(data.km);
    data.miles = parseFloat(data.miles);
    data.year = parseInt(data.year, 10);

    e.preventDefault();
    axios.post(`${URL}/vehicles`, data).then(retrieveVehicles);
});
