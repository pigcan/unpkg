import express from 'express';
import cors from 'cors';

import showStats from '../actions/showStats';

const app = express.Router();

app.use(cors());
app.use(showStats);

export default app;
