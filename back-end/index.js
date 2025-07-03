const express = require('express');
const App = express();
App.use(express.json());
const RouteRegistration = require('./routes/RegistrationRoute');

App.post('/api/registration',RouteRegistration);
App.listen(5000,()=>{
    console.log('http://localhost:5000');
})