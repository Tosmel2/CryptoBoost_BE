import express from "express";
import morgan from "morgan"
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();


const app = express()









app.use(morgan('dev'))
app.use(cors({ origin: '*' }))




//listen server
const PORT = process.env.Port || 8000;
app.listen(PORT, () => console.log(`Web server running on port ${PORT}`)); 