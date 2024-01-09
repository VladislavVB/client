import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';
import { PrimengCustomModule } from './shared/modules/primeng-custom/primeng-custom.module';
import { TableModule } from 'primeng/table';
import { AuthModule } from './pages/auth/auth.module';
import { HomeModule } from './pages/home/home.module';
import { MessageService } from 'primeng/api';
import { ShopModule } from './pages/shop/shop.module';
import { ShowroomModule } from './shared/modules/showroom/showroom.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PrimengCustomModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    AuthModule,
    HomeModule,
    ShowroomModule,
    TopBarModule,
    ShopModule,
  ],
  providers: [MessageService],

  bootstrap: [AppComponent],
})
export class AppModule {}
