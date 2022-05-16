const express = require('express');
const app = express();
const petsRouter = require('./routes/pets');
const servicosRouter = required("./routes/servicos");
const homeRouter = required('/routes/home');

app.use(homeRouter);
app.use(petsRouter);
app.use(servicosRouter);

app.listen(3000, () => console.log('RODANDO...'))