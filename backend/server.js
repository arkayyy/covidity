const BlogPost=require('./models/BlogPost')
const express=require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path=require('path');
const router=express.Router()
const routes = require('./routes/api')
const cors=require('cors');
const { urlencoded } = require('body-parser');


const app=express();
const PORT = process.env.PORT || 8080;

const MONGO_URI='mongodb+srv://admin:admin@cluster0.rgwkm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const uri ="mongodb+srv://admin:admin@cluster0.rgwkm.mongodb.net?writeConcern=majority";



mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected!');
});

//Schema


//Saving to MongoDB
// const data={title:'wenfienwf',body:'dfingidnfg'};

// const newBlogPost=new BlogPost(data);

// newBlogPost.save((err)=>{
//     if(err)
//     {console.log(err);}
//     else
//     {console.log('Data saved!');}
// });

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(cors())
//HTTP Request Logger
app.use(cors())
app.use(morgan('tiny'));
app.use('/api',routes)


//Route


app.listen(PORT,console.log(`Server is running at ${PORT}`));


