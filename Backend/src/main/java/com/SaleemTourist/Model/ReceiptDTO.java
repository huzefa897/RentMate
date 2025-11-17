package com.SaleemTourist.Model;

import lombok.Data;

import java.util.Date;

@Data
public class ReceiptDTO {
    private Date usedDate;
    private Long vehicleId;
    private Long startKms;
    private Long endKms;
    private Long totalHrs;
    private Long parkingCharges;
    private Long driverBhatta;
}
