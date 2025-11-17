package com.SaleemTourist.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class VehiclesModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vehicleId;
    private Long makeId;
    private Long modelId;
    private Long categoryId;
    private Long baseRate;
    private Long perKmRate;
    private Long extraHrsRate;
    private Long extraKmsRate;
}
