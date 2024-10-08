import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product!: any;
  serializedProduct(product: any): any {
    return JSON.stringify(product);
  }
}
