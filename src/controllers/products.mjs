import handleError from '../errors/errors.mjs';
import products from '../data/products.mjs';

export default { create, list, show };

function create(req, res) {
    const newEntry = {
        _id: Object.keys(products).length + 1,
        name: req.body.name || '',
        description: req.body.description || '',
        rating: req.body.rating || 0,
        imgUrl: req.body.imgUrl || '',
        price: req.body.price || '',
        category: req.body.category || '',
        reviews: [],
    };

    if (typeof newEntry.name !== 'string') return handleError('name', null, res);
    if (typeof newEntry.description !== 'string') return handleError('description', null, res);
    if (typeof newEntry.rating !== 'number') return handleError('rating', null, res);
    if (typeof newEntry.imgUrl !== 'string') return handleError('imgUrl', null, res);
    if (typeof newEntry.price !== 'string') return handleError('price', null, res);
    if (typeof newEntry.category !== 'string') return handleError('category', null, res);

    products.push(newEntry);
    res.json(newEntry);
}

function list(req, res) { res.json(products); }

function show(req, res) {
    const check = e => e._id === parseInt(req.params.id, 10);

    if (products.some(check)) res.json(products.filter(check));
    else handleError('_id', req.params.id, res);
}
