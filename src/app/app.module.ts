import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component'
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';

import { SearchPipe } from './search.pipe';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { ProductsListComponent } from './components/admin/products-list/products-list.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomePageComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    SearchPipe,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    LoadingBarComponent,
    AddProductComponent,
    ProductsListComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // font awesome functionality  
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far, fab);
  }
}
