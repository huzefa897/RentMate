package com.SaleemTourist.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SaleemTourist.Model.VehiclesModel;

public interface VehiclesRepo extends JpaRepository<VehiclesModel,Long>{

}
