function toggleComments() {
    const ele = document.querySelector('#listComments');

    if (!ele.className) ele.className = 'hidden';
    else {
        ele.className = '';
        retrieveComments();
    }
}

function toggleContacts() {
    const ele = document.querySelector('#listContacts');

    if (!ele.className) ele.className = 'hidden';
    else {
        ele.className = '';
        retrieveContacts();
    };
}

function toggleProducts() {
    const ele = document.querySelector('#listProducts');

    if (!ele.className) ele.className = 'hidden';
    else {
        ele.className = '';
        retrieveProducts();
    };
}

function toggleVehicles() {
    const ele = document.querySelector('#listVehicles');

    if (!ele.className) ele.className = 'hidden';
    else {
        ele.className = '';
        retrieveVehicles();
    };
}

function toggleRoutes() {
    const ele = document.querySelector('table');

    if (!ele.className) ele.className = 'hidden';
    else ele.className = '';
}
