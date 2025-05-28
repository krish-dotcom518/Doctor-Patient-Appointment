import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app= express()
const port = process.env.PORT || 8000

const corsOptions={
    origin:true
}

app.get('/', (req,res)=>{
    res.send('Api is Working')
})

//database connection
mongoose.set('strictQuery', false)
const connectDB = async()=>{
    try{
        mongoose.connect(process.env.MONGO_URL, 
            { useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        console.log("MongoDB database is connected")
    }catch(err){
        console.log("MongoDB database connection failed", err.message);
    }
}

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.listen(port, ()=>{
    connectDB();
    console.log("Server is Running on port" + port)
})