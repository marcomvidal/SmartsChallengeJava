import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListingComponent } from './customer-listing/customer-listing.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { ModelModule } from './model/model.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListingComponent,
    CustomerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
