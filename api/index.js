import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log("Mongodb is connected");
    }
).catch((err)=>{
    console.log(err);
});

const app = express();

app.listen(3000,()=>{
    console.log("I am dhruv get addimission in MIT in Usa for master degree in Artificial Intelligence with 100% scholarship");
})


// yrvd0uJehWA1N6rE    pj227994