import express from 'express';

import controller from '../controllers/contacts.mjs';

const router = express.Router();

export default router;

router.get('/', controller.list);
router.get('/:id', controller.show);
router.post('/', controller.create);
