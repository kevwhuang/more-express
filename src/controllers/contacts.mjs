import contacts from '../data/contacts.mjs';
import handleError from '../errors/errors.mjs';

export default { create, list, show };

function create(req, res) {
    const newEntry = {
        _id: Object.keys(contacts).length + 1,
        name: req.body.name || '',
        occupation: req.body.occupation || '',
        avatar: req.body.avatar || '',
    };

    if (typeof newEntry.name !== 'string') return handleError('name', null, res);
    if (typeof newEntry.occupation !== 'string') return handleError('occupation', null, res);
    if (typeof newEntry.avatar !== 'string') return handleError('avatar', null, res);

    contacts.push(newEntry);
    res.json(newEntry);
}

function list(req, res) { res.json(contacts); }

function show(req, res) {
    const check = e => e._id === parseInt(req.params.id, 10);

    if (contacts.some(check)) res.json(contacts.filter(check));
    else handleError('_id', req.params.id, res);
}
