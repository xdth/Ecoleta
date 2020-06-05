import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();
// cors: all URLs accepted (dev only)
app.use(cors());
// cors: prod
// app.use(cors({ origin: '200.200.200.200' }));

app.use(express.json());
app.use(routes);

// serve static files (express function)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// errors validation
app.use(errors());

app.listen(3333);