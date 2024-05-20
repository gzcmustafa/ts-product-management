import { ProductService } from "./ProductService";
import { Product } from "./Product";



let _productService = new ProductService();

let result;

result = _productService.getById(2);


let p = new Product();
p.id=2
p.name = "Product-77";
p.price = 4000;
p.category = "MobileCar";
_productService.saveProduct(p);
// result = _productService.getProducts();

// _productService.deleteProduct(result);
result = _productService.getProducts();
console.log(result)
