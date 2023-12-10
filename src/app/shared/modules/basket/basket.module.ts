import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './components/basket/basket.component';
import { PrimengCustomModule } from '../primeng-custom/primeng-custom.module';

@NgModule({
  declarations: [BasketComponent],
  imports: [CommonModule, PrimengCustomModule],
  exports: [BasketComponent],
})
export class BasketModule {}
