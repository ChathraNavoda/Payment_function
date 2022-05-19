import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { DetailsListComponent } from './details-list/details-list.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {path:'details' , component: DetailsListComponent},
  {path:'create-payment', component: CreatePaymentComponent},
  {path:'' , redirectTo: 'details',pathMatch: 'full'},
  {path:'update-payment/:id', component: UpdatePaymentComponent},
  {path:'view-payment/:id', component: ViewDetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
