package com.SaleemTourist.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class MakeModel {
    @Id
    @GeneratedValue
    private Long Id;
    private String nameOfTheCompany;
}
