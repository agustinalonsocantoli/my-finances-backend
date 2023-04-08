import express from "express";
import productController from "../controllers/product.js";

const router = express.Router();

router.get('/products', productController.getProducts);

export default router;