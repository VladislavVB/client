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
  ],
  exports: [
    ButtonModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    ToastModule,
    MessagesModule,
  ],
  providers: [MessageService],
})
export class PrimengCustomModule {}
