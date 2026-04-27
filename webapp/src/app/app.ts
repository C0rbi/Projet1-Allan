import { Component, signal } from '@angular/core';
import { IndexHero } from "./index-hero/index-hero";
import { ListingProduct } from "./listing-product/listing-product";

@Component({
  selector: 'app-root',
  imports: [IndexHero, ListingProduct],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LDNC');
}
