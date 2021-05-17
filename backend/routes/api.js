const express=require('express')
const BlogPost = require('../models/BlogPost')
const { MongoClient } = require("mongodb");
const uri ="mongodb+srv://admin:admin@cluster0.rgwkm.mongodb.net?writeConcern=majority";
const client = new MongoClient(process.env.MONGO_CLUSTER_URI,{useUnifiedTopology:true});

const router = express.Router()

router.get('/',(req,res)=>{
    BlogPost.find({})
    .then((data)=>{
        console.log("DATA:",data);
        res.json(data)
    })
    .catch((err)=>{
        console.log("ERROR",err)
    })
});

router.get('/rk',(req,res)=>{
    res.json("JAA MAR JAA BC")
})


router.post('/save',(req,res)=>{
    console.log("data:",req.body)

    
    
    async function run() {
        try {
          await client.connect();
          const database = client.db("DonatorsDB");
          const movies = database.collection("districtwise");
          // create a document to be inserted
          movies.find({district_id:"1"})
          const doc = { name: "jjjnjn", location: "Kolkata" , resource:"oxygen"};
          const result = await movies.insertOne(doc);
          res.json({refNo:result})
          console.log(
            `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
          );
        } finally {
          await client.close();
        }
      }
      run()
})

module.exports=router
