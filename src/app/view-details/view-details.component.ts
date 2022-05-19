import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  id: number
  pay: Payment


  constructor(private route: ActivatedRoute,
    private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.pay = new Payment
    this.paymentService.getPaymentById(this.id).subscribe(data=>{
      this.pay = data;
    })
  }

}
