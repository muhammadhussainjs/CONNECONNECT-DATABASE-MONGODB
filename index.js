 const express = require('express')
 const app = express()
const port = process.env.PORT
 const cors = require('cors')
 const mongoose = require('mongoose')
 require('dotenv').config()
 
//MIDDLEWARE
app.use(cors())
app.use(express.json())

app.get('/' , (req , res)=>{
    res.send('home')
})

const connectDB = async()=>{
    try{
     const connect = await mongoose.connect(process.env.MONGO_URI)
console.log('database connected');
    }
    catch(error){
        console.log(error);
    }

}
connectDB().then((res)=>{
    app.listen(process.env.PORT)
}).catch((err)=>{
    console.log(err);
})