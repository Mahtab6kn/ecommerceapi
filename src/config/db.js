const mongoose = require("mongoose")
require('dotenv').config()


mongoose.connect(process.env.DATABASE)
         .then(()=> console.log('Connection Successful.....'))
         .catch((e)=> console.log(e))

// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
//   .then(()=> console.log('Connection successfull.....'))
//   .catch(()=> console.log('Connection Failed.'))    