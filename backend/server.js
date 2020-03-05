const express=require('express');
const app=express();
const port=process.env.port|| 5000
const cors=require('cors');
const mongoose=require('mongoose');
const todoRouter=require('./todoRoutes')
require('dotenv').config();

app.use(cors());
app.use(express.json());


app.use('/todos',todoRouter);

mongoose.connect(process.env.URL,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true},()=>{
    console.log("database connected");
});


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});