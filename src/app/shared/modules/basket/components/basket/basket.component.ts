import { Component } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  products = [
    {
      id: '1',
      code: 'f230fh0g3',
      name: 'IPhone',
      description: 'описание хуйни',
      category: 'Телефоны',
      quantity: 24,
    },
    {
      id: '2',
      code: 'a1b2c3d4e5',
      name: 'Samsung Galaxy',
      description: 'описание продукта',
      category: 'Телефоны',
      quantity: 10,
    },
  ];
}
