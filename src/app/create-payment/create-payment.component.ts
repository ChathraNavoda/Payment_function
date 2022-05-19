import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

  pay: Payment = new Payment();

  constructor(private paymentService:PaymentService,
    private router:Router) { }

  ngOnInit(): void {

  }

  savePayment(){
    this.paymentService.createPayment(this.pay).subscribe(data=>{
      console.log(data);
      this.goToPaymentList();
    },
    error=>console.log(error));

  }

  goToPaymentList(){

    this.router.navigate(['/details'])
  }
    onSubmit(){
      console.log(this.pay);
      this.savePayment();
    
    }

    }
  



