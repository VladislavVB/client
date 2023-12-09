import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PrimengCustomModule } from 'src/app/shared/modules/primeng-custom/primeng-custom.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PrimengCustomModule, RouterModule],
})
export class HomeModule {}
