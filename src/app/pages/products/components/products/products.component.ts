import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../types/product';
import { ProductsServices } from '../../services/products.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: IProduct[];

  constructor(private productService: ProductsServices) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: IProduct[]) => {
      this.products = data;
    });
  }
}
