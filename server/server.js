import express, { urlencoded } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'

// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()
const app = express();
const URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: true}))

const connect_Database = async () => {
    try {

        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');

    } catch (error) {
        console.error('Database Connection Error:', error);
        process.exit(1);
    }
};

connect_Database();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

export default app