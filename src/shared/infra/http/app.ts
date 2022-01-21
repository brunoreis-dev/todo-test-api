import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import 'dotenv/config';
import 'express-async-errors';

import { router } from './routes';

import createConnection from '@shared/infra/typeorm';

createConnection();

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

export { app };
