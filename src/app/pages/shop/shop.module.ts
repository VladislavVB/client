import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from 'src/app/shared/modules/products/products.module';
import { BasketModule } from 'src/app/shared/modules/basket/basket.module';
import { PrimengCustomModule } from 'src/app/shared/modules/primeng-custom/primeng-custom.module';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, ProductsModule, BasketModule, PrimengCustomModule],
})
export class ShopModule {}
