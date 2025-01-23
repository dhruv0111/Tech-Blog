import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

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

app.use('/api/user/', userRoutes);


// yrvd0uJehWA1N6rE    pj227994