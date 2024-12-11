package com.example.spring_boot_crud_operation_example.Controller;

import com.example.spring_boot_crud_operation_example.Response.ResponseStructure;
import com.example.spring_boot_crud_operation_example.Service.RegisterService;
import com.example.spring_boot_crud_operation_example.SpringBootCrudOperationExampleApplication;
import com.example.spring_boot_crud_operation_example.dao.RegisterDao;
import com.example.spring_boot_crud_operation_example.entity.Register;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class RegisterController {
    @Autowired
    private RegisterDao dao;

    @Autowired
    private RegisterService registerService;

    @PostMapping(value = "/saveRegisterReact")
    public ResponseStructure<Register> saveRegisterUserServiceController(@RequestBody Register register){
        return registerService.saveRegisterUserService(register);
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringBootCrudOperationExampleApplication.class, args);
    }
}
