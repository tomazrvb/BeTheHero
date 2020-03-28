const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Ongs routes
routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

//Incidents Routes
routes.get('/incidents',IncidentsController.index);
routes.post('/incidents',IncidentsController.create);
routes.delete('/incidents/:id',IncidentsController.delete)

// Profile routes
routes.get('/profile',ProfileController.index);

//Session routes 
routes.post('/session',SessionController.create);

module.exports = routes; 
