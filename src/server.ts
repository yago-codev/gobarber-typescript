// dependências
import express from 'express';
import bodyParser from 'body-parser';

// módulos
import routes from './routes';
import './database';

const app = express();

// configs
app.use(bodyParser.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
