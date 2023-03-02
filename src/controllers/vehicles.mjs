import handleError from '../errors/errors.mjs';
import vehicles from '../data/vehicles.mjs';

export default { create, list, show };

function create(req, res) {
    const newEntry = {
        _id: Object.keys(vehicles).length + 1,
        imgUrl: req.body.imgUrl || '',
        year: req.body.year || 0,
        make: req.body.make || '',
        model: req.body.model || '',
        price: req.body.price || '',
        km: req.body.km || 0,
        miles: req.body.miles || 0,
        fuel: req.body.fuel || '',
        city: req.body.city || '',
        isNew: req.body.isNew || false,
    };

    if (typeof newEntry.imgUrl !== 'string') return handleError('imgUrl', null, res);
    if (typeof newEntry.year !== 'number') return handleError('year', null, res);
    if (typeof newEntry.make !== 'string') return handleError('make', null, res);
    if (typeof newEntry.model !== 'string') return handleError('model', null, res);
    if (typeof newEntry.price !== 'string') return handleError('price', null, res);
    if (typeof newEntry.km !== 'number') return handleError('km', null, res);
    if (typeof newEntry.miles !== 'number') return handleError('miles', null, res);
    if (typeof newEntry.fuel !== 'string') return handleError('fuel', null, res);
    if (typeof newEntry.city !== 'string') return handleError('city', null, res);
    if (typeof newEntry.isNew !== 'boolean') return handleError('isNew', null, res);

    vehicles.push(newEntry);
    res.json(newEntry);
}

function list(req, res) { res.json(vehicles); }

function show(req, res) {
    const check = e => e._id === parseInt(req.params.id, 10);

    if (vehicles.some(check)) res.json(vehicles.filter(check));
    else handleError('_id', req.params.id, res);
}
