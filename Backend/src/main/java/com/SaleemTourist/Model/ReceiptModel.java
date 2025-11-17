package com.SaleemTourist.Model;

import jakarta.persistence.*;
import java.util.Date;
import lombok.Data;


@Entity
@Data
public class ReceiptModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int receiptId;
    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private VehiclesModel vehicleModel; //FK

    private Date usedDate;
    private Long startKms;
    private Long endKms;
    private Long totalKms;
    private Long extraKms;
    private Long totalHrs;
    private Long extraHrs;
    private Long extraHrsAmt;
    private Long extraKmsAmt;
    private Long driverBhatta;
    public Long extraHrsRate; // will be fetched from vehicleMode
    private Long baseRate; // will be fetched from vehicleModel
//     private Long perKmRate; // will be fetched from vehicleModel
    private Long extraKmsRate; // will be fetched from vehicleModel
    private Long parkingCharges;
    private Long totalAmount;
}
