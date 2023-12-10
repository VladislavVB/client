import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { PrimengCustomModule } from 'src/app/shared/modules/primeng-custom/primeng-custom.module';
import { ProductsServices } from './services/products.services';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, PrimengCustomModule],
  providers: [ProductsServices],
  exports: [ProductsComponent],
})
export class ProductsModule {}
