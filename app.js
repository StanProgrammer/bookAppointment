const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')
const userRoute = require('./routes/userRoute')
const sequelize = require('./util/database')
const User = require('./models/users')
const cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));

 

app.use(bodyParser.json())
app.use(userRoute)
app.get('/user',userRoute)
User.sync()
.then(
app.listen('3000',()=>{
  console.log('no error');
}))

.catch(err=>{console.log(err);})





