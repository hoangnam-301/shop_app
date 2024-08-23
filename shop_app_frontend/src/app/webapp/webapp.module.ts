import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebappRoutingModule } from './webapp-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebappRoutingModule,
  //  BrowserModule
  ],
  providers:[],
  bootstrap:[
  
  ]
})
export class WebappModule { }
