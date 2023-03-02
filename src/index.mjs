import cors from 'cors';
import express from 'express';
import path from 'path';
import url from 'url';

import routeComments from './routes/comments.mjs';
import routeContacts from './routes/contacts.mjs';
import routeProducts from './routes/products.mjs';
import routeVehicles from './routes/vehicles.mjs';

const app = express();
const PORT = process.env.PORT || 4000;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}.`));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(log);

app.use('/comments', routeComments);
app.use('/contacts', routeContacts);
app.use('/products', routeProducts);
app.use('/vehicles', routeVehicles);

function log(req, res, next) {
    console.table({
        time: new Date().toUTCString(),
        url: `${req.protocol}://${req.get('host')}${req.url}`,
        method: req.method,
    });
    next();
}
