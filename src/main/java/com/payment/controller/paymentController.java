package com.payment.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.payment.exception.ResourceNotFoundException;
import com.payment.model.payment;
import com.payment.repository.paymentRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins ="http://localhost:4200/")
public class paymentController {
	
	@Autowired
	private paymentRepository paymentrepo;
	
	@GetMapping("/details")
	public List<payment> getAllPayments(){
		return paymentrepo.findAll();
	}
	
	//Create REST
	@PostMapping("/details")
	public payment createPayment(@RequestBody payment pay) {
		return paymentrepo.save(pay);
	}
	//get by Id
	@GetMapping("/details/{id}")
	public ResponseEntity<payment> getPaymentById(@PathVariable Long id) {
		
		payment pay = paymentrepo.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Payment details not exist with is ID : "+id));
		
	
		return ResponseEntity.ok(pay);
	}
 
	
	// update employee rest api
	
		@PutMapping("/details/{id}")
		public ResponseEntity<payment> updatePayment(@PathVariable Long id, @RequestBody payment payDetails){
			payment pay = paymentrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Payment details not exist with is ID : "+id));
			
			pay.setName(payDetails.getName());
			pay.setPhone(payDetails.getPhone());
			pay.setEmail(payDetails.getEmail());
			
			payment updatedPayment = paymentrepo.save(pay);
			return ResponseEntity.ok(updatedPayment);
		}
		
		// delete employee rest api
		@DeleteMapping("/details/{id}")
		public ResponseEntity<Map<String, Boolean>> deletePayment(@PathVariable Long id){
			payment pay = paymentrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Payment details not exist with is ID : " + id));
			
			paymentrepo.delete(pay);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
}
