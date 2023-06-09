const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
var cors = require('cors')

const port = process.env.PORT || 3200;

app.use(cors())
app.use(express.json())
//
//


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ioy1chb.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("Geniuscar");

    const geniuscarparts= database.collection("geniuscarparts");
    const booking=database.collection("booking");
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    app.delete('/booking/:id',async(req,res)=>{
        const id=req.params.id;
      
        const query = { _id:new ObjectId(id)};
        const result = await booking.deleteOne(query);
        res.send(result);
    })
    app.post('/booking',async(req,res)=>{
        const data=req.body;
        console.log(data);
        const result = await booking.insertOne(data);
        res.send(result);
    })
    app.patch('/booking/:id',async(req,res)=>{
      const id=req.params.id;
      const databook=req.body;
      console.log(databook);
      const query={_id:new ObjectId(id)};
      const updateDoc = {

        $set: {
  
         status:databook.status
  
        },
  
      };
  
      const result = await booking.updateOne(query, updateDoc);
      res.send(result);
    })
    app.get('/booking',async(req,res)=>{
        console.log(req.query.email);
        let query={};
        if(req.query?.email){
            query= { email: req.query.email}
        }
        const result=await booking.find(query).toArray();
        res.send(result);
    })
    app.get('/cars',async(req,res)=>{
        const cursor = geniuscarparts.find();
        const result=await cursor.toArray();
        res.send(result);
    })
    app.get('/cars/:id',async(req,res)=>{
        const id=req.params.id;
        const query = { _id:new ObjectId(id)};
        const options = {
          // sort matched documents in descending order by rating
       
          // Include only the `title` and `imdb` fields in the returned document
          projection: { title: 1, price: 1 ,service_id: 1, img: 1},
        };
        const movie = await geniuscarparts.findOne(query, options);
        res.send(movie);
    })

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})