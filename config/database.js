import mongoose from "mongoose";

export function connectMongoDb () {

   try {
    mongoose.set('strictQuery',true);
    mongoose.connect(process.env.MONGO_DB);
    console.log("MongoDb Connected Successfully");

   }
   catch(error){
     console.log("Connecting error",error);
     
   }

}

