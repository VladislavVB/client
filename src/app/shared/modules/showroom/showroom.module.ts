import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { PrimengCustomModule } from 'src/app/shared/modules/primeng-custom/primeng-custom.module';
import { ShowroomServices } from './services/showroom.services';

@NgModule({
  declarations: [ShowroomComponent],
  imports: [CommonModule, PrimengCustomModule],
  providers: [ShowroomServices],
})
export class ShowroomModule {}
