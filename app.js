"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService_1 = require("./ProductService");
var Product_1 = require("./Product");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getById(2);
var p = new Product_1.Product();
p.id = 2;
p.name = "Product-77";
p.price = 4000;
p.category = "MobileCar";
_productService.saveProduct(p);
// result = _productService.getProducts();
// _productService.deleteProduct(result);
result = _productService.getProducts();
console.log(result);