import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../types/product';
import { ProductsServices } from '../../services/products.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productSubscription: Subscription;
  products!: IProduct[];

  constructor(private productService: ProductsServices) {}

  initilazesListeners() {
    this.productSubscription = this.productService
      .getProducts()
      .subscribe((data: IProduct[]) => {
        this.products = data;
      });
  }

  ngOnInit(): void {
    this.initilazesListeners();
  }
  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
