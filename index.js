require('dotenv').config();

const hbs = require('hbs');
const express = require('express');

var cors = require('cors')
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL
//Routes
const routes = require('./routes/routes');
const channelroutes = require('./routes/channelRoutes');
const views = require('./views/routes');


var corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(express.json());
app.use(express.urlencoded());
//app.set('view engine', 'hbs');
app.use(cors(corsOptions))
app.set('views', './views');
app.use('/api', routes);
app.use('/channelapi', channelroutes);
app.use('/', views);
app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})