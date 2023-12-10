import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { PrimengCustomModule } from 'src/app/shared/modules/primeng-custom/primeng-custom.module';
import { ProductsServices } from './services/products.services';
import { BasketServices } from '../basket/services/basket.services';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, PrimengCustomModule],
  providers: [ProductsServices, BasketServices],
  exports: [ProductsComponent],
})
export class ProductsModule {}
