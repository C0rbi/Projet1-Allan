import { Component, Input } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-listing-product',
  standalone: true,
  imports: [Product],
  templateUrl: './listing-product.html',
  styleUrl: './listing-product.css',
})
export class ListingProduct {
  @Input() product!: Product;

  products = [
    { id: 1, name: 'Clavier Gaming', price: 89 },
    { id: 2, name: 'Souris Gamer', price: 45 },
    { id: 1, name: 'Clavier Gaming', price: 89 },
    { id: 2, name: 'Souris Gamer', price: 45 },
    { id: 1, name: 'Clavier Gaming', price: 89 },
    { id: 2, name: 'Souris Gamer', price: 45 },
    { id: 1, name: 'Clavier Gaming', price: 89 },
    { id: 2, name: 'Souris Gamer', price: 45 },
    { id: 1, name: 'Clavier Gaming', price: 89 },
    { id: 2, name: 'Souris Gamer', price: 45 },
    { id: 1, name: 'Clavier Gaming', price: 89 },
    { id: 2, name: 'Souris Gamer', price: 45 },
  ];
}