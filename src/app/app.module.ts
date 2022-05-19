import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsListComponent } from './details-list/details-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { FormsModule } from '@angular/forms';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsListComponent,
    CreatePaymentComponent,
    UpdatePaymentComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
