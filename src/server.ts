// dependências
import express from 'express';

// módulos
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
