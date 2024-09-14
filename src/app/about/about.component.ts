import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

  product: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParamMap.subscribe((params) => {
      const data = params.get('data');
      if (data) {
        this.product = JSON.parse(data);
      }
      console.log('this.product :', this.product);
    });
  }

  goBack() {
    this.router.navigateByUrl('/products');
  }
}
