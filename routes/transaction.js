import express from "express";
import transactionController from "../controllers/transaction.js";

const router = express.Router();

router.get('/transactions', transactionController.getTransactions);

export default router;