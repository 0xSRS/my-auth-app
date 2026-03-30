import dotenv from 'dotenv';
dotenv.config()

import express from "express"
import cors from "cors"
import authRoutes from "./routes/authRoutes" 
import mongoose from "mongoose"


const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/auth",authRoutes)

async function start(){
    try{
        await mongoose.connect(process.env.DB_HOST)
        app.listen(process.env.PORT,()=>{
            console.log(`Listening at port ${process.env.PORT}`)
        })
    }catch{
        console.log("Unable to connect to DB")
    }
}

start()