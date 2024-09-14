import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  http = inject(HttpClient);
  products$ = this.http.get('https://fakestoreapi.com/products') as Observable<any[]>;

}
