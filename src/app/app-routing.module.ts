import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { ProductsListComponent } from './components/admin/products-list/products-list.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'ShoppingCart', component: ShoppingCartComponent },
  { path: 'ProductDetails/:id', component: ProductDetailsComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'list', component: ProductsListComponent },
  { path: 'edit/:id', component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
