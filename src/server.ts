import { routes } from './routes';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()) // indicar através do origin o endereço de acesso do backend
app.use(express.json());
app.use(routes)


app.listen(3333, () => {
  console.log("Server running 🐱‍🏍 on port " + 3333);
})
