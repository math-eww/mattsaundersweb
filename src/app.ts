import express from 'express';
import ejs from 'ejs';

const port = 3001;

const app = express();

import { router } from './routes/routes';
router(app);
// require('./routes/routes')(app);

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(port, () => {
  console.log('MathServer listening on port: ' + port);
});
