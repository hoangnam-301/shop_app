import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { RegisterComponent } from './register/register.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  {path:'header',component:HeaderComponent},
  { path: 'rooter', component:FooterComponent},
  {path:'order', component:OrderComponent},
  {path:'order-confirm',component:OrderConfirmComponent},
  {path:'register',component:RegisterComponent},
  {path:'detail-product', component:DetailProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebappRoutingModule { }
