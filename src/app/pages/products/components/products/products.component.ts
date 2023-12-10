import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct } from '../../types/product';
import { ProductsServices } from '../../services/products.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products$: Observable<IProduct[]>;

  constructor(private productService: ProductsServices) {
    this.products$ = this.productService.getProducts();
  }
}
