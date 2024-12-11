package com.example.spring_boot_crud_operation_example.Service;

import com.example.spring_boot_crud_operation_example.Response.ResponseStructure;
import com.example.spring_boot_crud_operation_example.dao.RegisterDao;
import com.example.spring_boot_crud_operation_example.entity.Register;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class RegisterService {
    @Autowired
    private ResponseStructure<Register> responseStructure;

    @Autowired
    private RegisterDao registerDao;

    public ResponseStructure<Register> saveRegisterUserService(Register register){
        Register register1=registerDao.saveRegisterUserDao(register);
        if (register1!=null){
            responseStructure.setStatusCode(HttpStatus.CREATED.value());
            responseStructure.setDescription("Successfully retreived from react");
            responseStructure.setMessage("User Registered Successfully");
            responseStructure.setCreaionTime(LocalDateTime.now());
            responseStructure.setData(register1);
            return responseStructure;
        }
        else {
            responseStructure.setStatusCode(HttpStatus.NOT_ACCEPTABLE.value());
            responseStructure.setDescription("Successfully retreived from react");
            responseStructure.setMessage("User Registered UnSuccessfully");
            responseStructure.setCreaionTime(LocalDateTime.now());
            responseStructure.setData(register1);
            return responseStructure;
        }
    }
}
