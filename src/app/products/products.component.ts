import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor() {}

  http = inject(HttpClient);
  products$ = this.http.get('https://fakestoreapi.com/products') as Observable<
    any[]
  >;

  searchQueryChange(e: any) {
    this.products$ = this.http.get('https://fakestoreapi.com/products').pipe(
      map((products: any) => {
        return products.filter((product: any) =>
          product.title.toLowerCase().includes(e.toLowerCase())
        );
      })
    );
  }

  sortQueryChange(e: any) {
    this.products$ = this.http
      .get('https://fakestoreapi.com/products')
      .pipe(map((products: any) => this.sortProducts(products, e)));
  }

  sortProducts(products: any[], e: any): any[] {
    const sortOption = e;
    return [...products].sort((a, b) => {
      if (sortOption === 'priceAsc') {
        return a.price - b.price;
      } else if (sortOption === 'priceDesc') {
        return b.price - a.price;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  }
}
