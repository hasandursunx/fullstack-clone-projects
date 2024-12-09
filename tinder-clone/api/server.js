import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

//routes
import authRoutes from './routes/authRoutes.js'
import matchRoutes from './routes/matchRoutes.js'
import userRoutes from './routes/userRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js';


dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
))


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT, () => {
    console.log('Server startedt at this port : ' + PORT)
    connectDB();
});