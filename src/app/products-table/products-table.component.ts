import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent{

products: Product[] = [
  {
    id: 1,
    name: "Mouse",
    price: 500,
    category: "Eletrônicos"
  },
  {
    id: 2,
    name: "Processador",
    price: 4000,
    category: "Eletrônicos"
  },
  {
    id: 3,
    name: "Teclado",
    price: 3000,
    category: "Eletrônicos"
  }
];
remove(removeProduct:Product){
  this.products = this.products.filter( b => b !== removeProduct);
}
}
