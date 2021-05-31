'use strict';

const express = require(`express`);
const mainRouter = require(`./routes/main`);
const myRouter = require(`./routes/my`);
const offersRouter = require(`./routes/offers`);

const DEFAULT_PORT = 8080;

const app = express();

app.use(`/`, mainRouter);
app.use(`/my`, myRouter);
app.use(`/offers`, offersRouter);

app.listen(DEFAULT_PORT, () => console.log(`Server is running ${DEFAULT_PORT}`));
