import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv'
import helmet from "helmet";
import morgan from "morgan";
import kpiRouter from './routes/kpi.js';
import productRouter from './routes/product.js';
import transactionRouter from './routes/transaction.js';
import kpi from "./models/kpi.js";
import product from "./models/product.js";
import transaction from './models/transaction.js';
import { kpis, products, transactions } from './data/data.js';

// Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/kpi', kpiRouter);
app.use('/product', productRouter);
app.use('/transaction', transactionRouter);

// Mongoose
const PORT = process.env.PORT;
const url = process.env.MONGO_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    app.listen(PORT, () => {
        console.log(`Server Run Port: ${PORT}`)
    })

    // Add data one time
    // await mongoose.connection.db.dropDatabase();
    // kpi.insertMany(kpis);
    // product.insertMany(products);
    // transaction.insertMany(transactions);
})
.catch((err) => {
    console.log(`${err} did not connect`)
});