import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'ShoppingCart', component: ShoppingCartComponent},
  {path: 'ProductDetails/:id', component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
