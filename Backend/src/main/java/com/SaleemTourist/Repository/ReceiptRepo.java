package com.SaleemTourist.Repository;

import com.SaleemTourist.Model.ReceiptModel;
import com.SaleemTourist.Model.VehiclesModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface ReceiptRepo extends JpaRepository<ReceiptModel, Long> {

}
