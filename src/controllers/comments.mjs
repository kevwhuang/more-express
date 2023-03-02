import comments from '../data/comments.mjs';
import handleError from '../errors/errors.mjs';

export default { create, list, show };

function create(req, res) {
    const newEntry = {
        _id: Object.keys(comments).length + 1,
        body: req.body.body || '',
        postId: 1,
    };

    if (typeof newEntry.body !== 'string') return handleError('body', null, res);

    comments.push(newEntry);
    res.json(newEntry);
}

function list(req, res) { res.json(comments); }

function show(req, res) {
    const check = e => e._id === parseInt(req.params.id, 10);

    if (comments.some(check)) res.json(comments.filter(check));
    else handleError('_id', req.params.id, res);
}
