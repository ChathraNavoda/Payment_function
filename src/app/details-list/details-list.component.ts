import { Payment } from '../payment';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.css']
})
export class DetailsListComponent implements OnInit {

details : Payment[];

  constructor(private paymentService: PaymentService,
    private router: Router) { }

  ngOnInit(): void {
    this.detailsList();
  }

    private detailsList(){
      this.paymentService.getDetailsList().subscribe(data =>{
        this.details = data;
      });
    }

    viewDetails(id: number){
      this.router.navigate(['view-payment',id])

    }

    updatePayment(id: number){
      this.router.navigate(['update-payment',id])

    }
    
    deletePayment(id: number){
      this.paymentService.deletePayment(id).subscribe(data =>{
        console.log(data);
        this.detailsList();
      })
    }
  }


