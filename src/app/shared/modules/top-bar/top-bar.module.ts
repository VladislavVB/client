import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PrimengCustomModule } from '../primeng-custom/primeng-custom.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, PrimengCustomModule, RouterModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
