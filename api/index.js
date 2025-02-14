import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log("Mongodb is connected");
    }
).catch((err)=>{
    console.log(err);
});

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000,()=>{
    console.log("I am dhruv get addimission in MIT in Usa for master degree in Artificial Intelligence with 100% scholarship");
});

app.use('/api/user/', userRoutes);
app.use('/api/auth', authRoute);
app.use('/api/post', postRoutes);



app.use((err,req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});


// yrvd0uJehWA1N6rE    pj227994