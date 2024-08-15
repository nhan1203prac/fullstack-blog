import express from 'express';
import cors from 'cors'
import posts from './routers/posts.js'
import mongoose from 'mongoose';
const app = express();
const PORT = process.env.port || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true,limit:'30mb' }));
app.use(cors())

app.use('/posts',posts)

mongoose.connect('mongodb://localhost:27017/fullstack_blog_dev',{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to db')
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
    
})
.catch(err=>{
    console.log('err',err)
})
