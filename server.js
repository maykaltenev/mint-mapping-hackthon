import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
// copy of express
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        console.log("We are connected to the database.🍀");
    })
    .catch((error) => {
        console.log("an error occurred while connecting ot the db", error);
    });

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`The webserver is running on port ${PORT}`));