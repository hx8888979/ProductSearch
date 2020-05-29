import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatInputModule, MatTooltipModule} from '@angular/material';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

import {AppComponent} from './app.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {ResultListComponent} from './result-list/result-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {TabPhotosComponent} from './item-detail/tab-photos/tab-photos.component';
import {TabSimilarProductsComponent} from './item-detail/tab-similar-products/tab-similar-products.component';
import {TabInfoComponent} from './item-detail/tab-info/tab-info.component';
import {TabShippingComponent} from './item-detail/tab-shipping/tab-shipping.component';
import {TabSellerComponent} from './item-detail/tab-seller/tab-seller.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultListComponent,
    ItemDetailComponent,
    TabPhotosComponent,
    TabSimilarProductsComponent,
    TabInfoComponent,
    TabShippingComponent,
    TabSellerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTooltipModule,
    RoundProgressModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
