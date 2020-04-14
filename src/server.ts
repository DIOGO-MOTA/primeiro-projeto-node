import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ messagem: 'cu' }));

app.listen(3333, () => {
  console.log('Server started');
});
