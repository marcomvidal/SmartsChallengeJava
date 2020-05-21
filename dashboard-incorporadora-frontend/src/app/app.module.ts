import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerListingComponent } from './customer-listing/customer-listing.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { ModelModule } from './model/model.module';
import { OrderButtonsComponent } from './order-buttons/order-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListingComponent,
    CustomerCardComponent,
    OrderButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
