package com.SaleemTourist.Service;

import com.SaleemTourist.Model.ReceiptDTO;
import com.SaleemTourist.Repository.ReceiptRepo;
import com.SaleemTourist.Repository.VehiclesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SaleemTourist.Model.ReceiptModel;
import com.SaleemTourist.Model.VehiclesModel;
@Service
public class ReceiptService {
    @Autowired
    private ReceiptRepo receiptRepo;
    @Autowired
    private VehiclesRepo vehiclesRepo;

    public ReceiptModel MakeReceipt(ReceiptDTO dto){
        VehiclesModel vehicle = vehiclesRepo.findById(dto.getVehicleId()).orElseThrow(()->new RuntimeException("Vehicle Not Found"));
        ReceiptModel receipt = new ReceiptModel();
        receipt.setVehicleModel(vehicle);
        receipt.setBaseRate(vehicle.getBaseRate());
        receipt.setUsedDate(dto.getUsedDate());
        receipt.setStartKms(dto.getStartKms());
        receipt.setEndKms(dto.getEndKms());
        receipt.setTotalHrs(dto.getTotalHrs());
        receipt.setTotalKms(totalKms(receipt.getStartKms(), receipt.getEndKms()));
        receipt.setExtraKms(extraKms(receipt.getTotalKms()));
        receipt.setExtraKmsAmt(extraKmsCalculation(receipt.getExtraKms(),vehicle));
        receipt.setExtraHrs(extraHrs(receipt.getTotalHrs()));
        receipt.setExtraHrsAmt(extraHrsAmount(receipt.getExtraHrs(),vehicle));
        receipt.setParkingCharges(dto.getParkingCharges());
        receipt.setDriverBhatta(dto.getDriverBhatta());

        receipt.setTotalAmount(TotalAmount(
                receipt.getExtraHrsAmt(),
                receipt.getExtraKmsAmt(),
                receipt.getDriverBhatta(),
                receipt.getBaseRate(),
                receipt.getParkingCharges()
                ));
        return receipt;
    }
    public Long extraKms(Long totalKms){
        if(totalKms>80){
            totalKms-=80;
        }
        else {
            totalKms= 0L;
        }
        return totalKms;
    }
    public Long extraHrs(Long totalHrs){
     if(totalHrs>8){
         totalHrs-=8;
     }
     else{
         totalHrs=0L;
     }
        return totalHrs;
    }
    public Long extraKmsCalculation(Long totalKms, VehiclesModel vehicle){
        return totalKms*vehicle.getExtraKmsRate();

    }
    private Long totalKms(Long startKms, Long endKms) {

        if (startKms == null || endKms == null) {
            throw new IllegalArgumentException("Start or End Kms cannot be null");
        }

        if (startKms > endKms) {
            throw new IllegalArgumentException("End Kms cannot be less than Start Kms");
        }

        return endKms - startKms;
    }
    public Long extraHrsAmount(Long extraHrs, VehiclesModel vehicle){
//        VehiclesModel vehicle = vehiclesRepo.findById(id).orElseThrow(()->new RuntimeException("Vehicle Not Found"));
        return vehicle.getExtraHrsRate() * extraHrs;
    }
    public Long TotalAmount(Long ExtraHrsAmt, Long ExtraKmsAmt, Long DriverBhatta,
                            Long BaseRate, Long ParkingCharges ){
        return ExtraHrsAmt+ExtraKmsAmt+DriverBhatta+BaseRate+ParkingCharges;
    }

}
