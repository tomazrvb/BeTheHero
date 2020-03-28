const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());

/**
 * Tipo de Parâmetros
 * Query Params: .query forma de acesso //são informado apos o sinal de '?' 
 * Route Params: .params forma de acesso 
 * Request Body: .body dados que vem do corpo da request 
 */
app.use(routes)

app.listen(3333);

