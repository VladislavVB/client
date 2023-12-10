import { Component } from '@angular/core';
import { BasketServices } from '../../services/basket.services';
import { Observable } from 'rxjs';
import { IProduct } from '../../../products/types/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  products$: Observable<IProduct[]>;

  constructor(private basketServices: BasketServices) {
    this.products$ = this.basketServices.getBasketProducts();
  }

  removeFormBasket(index: number) {
    this.basketServices.removeFromBasket(index)
  }

  clearBasket() {
    this.basketServices.clearBasket();
  }
}
