package com.payment.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.payment.model.payment;

@Repository
public interface paymentRepository extends JpaRepository<payment, Long>{

}
