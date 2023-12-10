import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../products/types/product';

@Injectable()
export class BasketServices {
  private basketSubject$ = new BehaviorSubject([]);

  constructor() {
    const storedData = localStorage.getItem('basket');
    if (storedData) this.basketSubject$.next(JSON.parse(storedData));
  }

  updateBasket(newBasket: IProduct[]) {
    this.basketSubject$.next(newBasket);
    localStorage.setItem('basket', JSON.stringify(newBasket));
  }

  getBasketProducts() {
    return this.basketSubject$.asObservable();
  }

  removeFromBasket(index: number) {
    const newBasket = [...this.basketSubject$.getValue()];
    newBasket.splice(index, 1);
    this.updateBasket(newBasket);
  }

  addProductToBasket(product: IProduct) {
    const newBasket = [...this.basketSubject$.getValue(), product];
    this.updateBasket(newBasket);
  }

  clearBasket() {
    this.updateBasket([]);
  }
}
