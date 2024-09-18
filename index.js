import express from 'express';
import 'dotenv/config';
import router from './routes/urlRoutes.js';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL).then((res) => console.log(`MongoDB Connected`)).catch((err) => console.log(`Connection Failed`));

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})