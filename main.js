import './style.css'
import { renderProducts } from './products';
import { updateproducts } from './updateproducts';
import products from "/api/products.json";
renderProducts(products);