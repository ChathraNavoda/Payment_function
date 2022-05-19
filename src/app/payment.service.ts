import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  private baseUrl= "http://localhost:8080/api/v1/details";
  constructor(private httpClent:HttpClient) { }


getDetailsList():Observable<Payment[]>{

  return this.httpClent.get<Payment[]>(`${this.baseUrl}`)

}

createPayment(pay:Payment):Observable<Object>{
  return this.httpClent.post<Payment[]>(`${this.baseUrl}`,pay)
}

getPaymentById(id: number):Observable<Payment>{
  return this.httpClent.get<Payment>(`${this.baseUrl}/${id}`)
}

updatePayment(id: number, pay: Payment): Observable<Object>{
  return this.httpClent.put(`${this.baseUrl}/${id}`, pay);
}

deletePayment(id: number): Observable<Object>{
  return this.httpClent.delete(`${this.baseUrl}/${id}`);
}
}