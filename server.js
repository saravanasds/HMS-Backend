import express from 'express'; 
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {connectMongoDb} from './config/database.js';
import  staffRouter  from './route/staff.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

connectMongoDb();

const port = process.env.PORT || 5000;

app.listen (port,()=>{
    console.log(`"Server running on the port ${port}"`)
});

app.get ("/",async(req,res)=>{
    return res.status(200).send("This is Aananthi's Backend");
})


//Route
app.use('/api/staff',staffRouter)
