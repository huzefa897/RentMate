package com.SaleemTourist.Controller;

import com.SaleemTourist.Model.ReceiptDTO;
import com.SaleemTourist.Model.ReceiptModel;
import com.SaleemTourist.Service.ReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("")
public class receiptsController {
    @Autowired
    private ReceiptService service;

    @GetMapping("/hello")
    public String greet(){return "Hello World";}

    @GetMapping("/receipt/{id}")
    public ReceiptModel MakeReceipt(@RequestBody ReceiptDTO dto){
     return service.MakeReceipt(dto);
    }
    @GetMapping("/receipt/{id}")
    public ReceiptModel
}
