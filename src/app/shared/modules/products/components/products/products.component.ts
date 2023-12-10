import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct } from '../../types/product';
import { ProductsServices } from '../../services/products.services';
import { Observable } from 'rxjs';
import { BasketServices } from '../../../basket/services/basket.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products$: Observable<IProduct[]>;

  constructor(
    private productService: ProductsServices,
    private basketServices: BasketServices
  ) {
    this.products$ = this.productService.getProducts();
  }

  addToBasket(product: IProduct) {
    this.basketServices.addProductToBasket(product);
  }
}
