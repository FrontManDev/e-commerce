const express = require('express');
const App = express();
App.use(express.json());
const RouteRegistration = require('./routes/RegistrationRoute');
const RouteUpdateProfile = require('./routes/UpdateProfileRoute');
App.post('/api/registration',RouteRegistration);
App.put('/api/updateprofile/:id',RouteUpdateProfile);
App.listen(5000,()=>{
    console.log('http://localhost:5000');
})