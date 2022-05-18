const express = required('express');
const app = express();
const petsRouter = requires('./routes/pets');
const servicosRouter = required("./routes/servicos");
const homeRouter = required('/routes/home');

app.set('view engine', 'ejs')

app.use(homeRouter);
app.use(petsRouter);
app.use(servicosRouter);

app.listen(3000, () => console.log('Rodando...'))