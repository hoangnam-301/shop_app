import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './webapp/register/register.component';
import { DetailProductComponent } from './webapp/detail-product/detail-product.component';
import { FooterComponent } from './webapp/footer/footer.component';
import { HeaderComponent } from './webapp/header/header.component';
import { HomeComponent } from './webapp/home/home.component';
import { OrderComponent } from './webapp/order/order.component';
import { OrderConfirmComponent } from './webapp/order-confirm/order-confirm.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegisterComponent,DetailProductComponent,FooterComponent,HeaderComponent,HomeComponent,OrderComponent,OrderConfirmComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shop_app';
}
