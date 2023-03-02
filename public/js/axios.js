async function retrieveComments() {
    const output = document.querySelector('#displayComments');
    const URL = 'http://localhost:4000/comments';

    output.innerHTML = null;

    await axios.get(URL)
        .then(res => {
            for (const e of res.data) {
                const anchor = document.createElement('a');
                const br = document.createElement('br');
                const span = document.createElement('span');

                anchor.innerText = 'Open';
                anchor.setAttribute('href', `${URL}/${e._id}`);
                anchor.setAttribute('target', '_blank');
                span.innerText = `${String(e._id).padStart(2, 0)}: ${e.body}`;

                output.append(span, anchor, br);
            }
        })
        .catch(err => { throw Error(err); });
}

async function retrieveContacts() {
    const output = document.querySelector('#displayContacts');
    const URL = 'http://localhost:4000/contacts';

    output.innerHTML = null;

    await axios.get(URL)
        .then(res => {
            for (const e of res.data) {
                const anchor = document.createElement('a');
                const br = document.createElement('br');
                const span = document.createElement('span');

                anchor.innerText = 'Open';
                anchor.setAttribute('href', `${URL}/${e._id}`);
                anchor.setAttribute('target', '_blank');
                span.innerText =
                    `${String(e._id).padStart(2, 0)}: ${e.name} \u2013 ${e.occupation}`;

                output.append(span, anchor, br);
            }
        })
        .catch(err => { throw Error(err); });
}

async function retrieveProducts() {
    const output = document.querySelector('#displayProducts');
    const URL = 'http://localhost:4000/products';

    output.innerHTML = null;

    await axios.get(URL)
        .then(res => {
            for (const e of res.data) {
                const anchor = document.createElement('a');
                const br = document.createElement('br');
                const span = document.createElement('span');

                anchor.innerText = 'Open';
                anchor.setAttribute('href', `${URL}/${e._id}`);
                anchor.setAttribute('target', '_blank');
                span.innerText =
                    `${String(e._id).padStart(2, 0)}: (${e.price}) ${e.name}`;

                output.append(span, anchor, br);
            }
        })
        .catch(err => { throw Error(err); });
}

async function retrieveVehicles() {
    const output = document.querySelector('#displayVehicles');
    const URL = 'http://localhost:4000/vehicles';

    output.innerHTML = null;

    await axios.get(URL)
        .then(res => {
            for (const e of res.data) {
                const anchor = document.createElement('a');
                const br = document.createElement('br');
                const span = document.createElement('span');

                anchor.innerText = 'Open';
                anchor.setAttribute('href', `${URL}/${e._id}`);
                anchor.setAttribute('target', '_blank');
                span.innerText = `${String(e._id).padStart(2, 0)}: (${e.price}) `;
                span.innerText += `${e.year} ${e.make} ${e.model} \u2013 ${e.miles} miles`;

                output.append(span, anchor, br);
            }
        })
        .catch(err => { throw Error(err); });
}
