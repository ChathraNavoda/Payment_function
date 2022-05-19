import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-payment',
  templateUrl:'./update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent implements OnInit {

  
  id :number;
  pay: Payment = new Payment();

  constructor(private paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.paymentService.getPaymentById(this.id).subscribe(data=>{
      this.pay = data;
    })

    }

    onSubmit(){
      this.paymentService.updatePayment(this.id, this.pay).subscribe( data =>{
        this.goToPaymentList();
      });
    }
    goToPaymentList(){
      this.router.navigate(['/details']);
    }
  }