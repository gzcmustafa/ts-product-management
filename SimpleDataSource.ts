import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1,"Product-1","Car",1000),
            new Product(2,"Product-2","Car",2000),
            new Product(3,"Product-3","car",3000),
            new Product(4,"Product-4","Car",4000)
        )
    }
    getProducst(): Product[] {
        return this.products;
    }
}