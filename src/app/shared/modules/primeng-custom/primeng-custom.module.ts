import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    ToastModule,
    MessagesModule,
    GalleriaModule,
  ],
  exports: [
    ButtonModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    ToastModule,
    MessagesModule,
    GalleriaModule,
  ],
  providers: [MessageService],
})
export class PrimengCustomModule {}
