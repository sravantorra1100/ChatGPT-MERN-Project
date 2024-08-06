const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const colors=require('colors');
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const connectDB = require('./config/db');


//dotenv 
dotenv.config()

//mongo connection
connectDB();

//rest object
const app=express()
const port=process.env.PORT || 3000


//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

//listen server
app.listen(port,()=>{
    console.log(`server running on port ${port}`.bgYellow)
});