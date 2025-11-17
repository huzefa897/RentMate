package com.SaleemTourist.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.SaleemTourist.Model.categoryModel;

public interface CategoryRepo extends JpaRepository<categoryModel,Long> {
    
}
