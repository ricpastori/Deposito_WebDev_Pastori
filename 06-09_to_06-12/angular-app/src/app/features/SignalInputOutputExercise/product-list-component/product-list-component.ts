import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card-component/product-card-component';

type Product = {
  name: string;
  description: string;
  price: number;
  available: boolean;
};

@Component({
  selector: 'app-product-list-component',
  imports: [ProductCardComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      name: 'Mouse wireless',
      description: 'Mouse ergonomico con connessione Bluetooth.',
      price: 24.99,
      available: true,
    },
    {
      name: 'Tastiera meccanica',
      description: 'Tastiera retroilluminata con switch tattili.',
      price: 89.9,
      available: false,
    },
    {
      name: 'Monitor 27 pollici',
      description: 'Display IPS Full HD ideale per studio e lavoro.',
      price: 219.99,
      available: true,
    },
  ];
}
