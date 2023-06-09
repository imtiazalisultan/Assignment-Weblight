
import express from 'express';
import { getProducts, getProductDetails } from '../controller/product-controller.js';



const router = express.Router();

router.get('/api/products',getProducts);

router.get('/api/product/:id',getProductDetails);

export default router