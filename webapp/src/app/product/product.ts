import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input() product: any;
}
