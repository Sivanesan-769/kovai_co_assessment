import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { ProductsComponent } from './products/products.component';
import { provideHttpClient } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductComponent } from './products/product/product.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, AboutComponent, ProductComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, MatCardModule, StoreModule.forRoot({}, {})],
  providers: [
    provideHttpClient(),
    provideStore(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
