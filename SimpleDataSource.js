"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Product-1", "Car", 1000), new Product_1.Product(2, "Product-2", "Car", 2000), new Product_1.Product(3, "Product-3", "car", 3000), new Product_1.Product(4, "Product-4", "Car", 4000));
    }
    SimpleDataSource.prototype.getProducst = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
