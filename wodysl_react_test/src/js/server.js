const express = require('express');
//const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json()); // 수정: 함수 호출
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.post('/login',async(req,res) => {

    // res.json({messege: "/post연결"});
    const {id,pwd} = req.body;

    console.log(req.body.id)
    console.log(req.body.pwd)
    // console.log("/post")
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb://localhost:27017";

    // 데이터베이스와 컬렉션 이름
    const dbName = 'test1';
    const collectionName = 'user';

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });
 
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();
    console.log("connected")
        
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const data = await collection.findOne({ id: id });
    console.log('Fetched data:', data);

    if(data){
        if(data.pwd===pwd){
            res.json({messege: "Login suceessful! 김지영!!", cheked: true});
        }else{
            res.json({messege: "ID or PASSWORD error", cheked: false});
        }
    }else{
        res.json({messege: "ID or PASSWORD error", cheked: false});
    }
    
    // Ensures that the client will close when you finish/error
    client.close();
    console.log('Connection closed');
    
    // const user = data.find((u) => u.id === id && u.pwd === pwd);

    // if (user){
    //     res.json({messege: "Login suceessful! 이동건!!", cheked: true});
    // }
    // else{
    //     res.json({messege: "ID or PASSWORD error", cheked: false});
    //     //res.status(401).send("username or password error");
    // }
} )


app.listen(port,()=>(
    console.log("연결되었습니다.")
))