const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()


//midleware
app.use(cors())
app.use(express.json())



console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)



// user: geniusDbUser
// pass: 2G8A0lp7J8djQ1zG


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster1.zm1lzl1.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});






app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(port, () => {
    console.log(`genius car server running son${port}`)
})