package com.example.spring_boot_crud_operation_example.dao;

import com.example.spring_boot_crud_operation_example.Repository.RegisterRepository;
import com.example.spring_boot_crud_operation_example.entity.Register;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RegisterDao {
    @Autowired
    private RegisterRepository registerRepository;

    public Register saveRegisterUserDao(Register register){
        return registerRepository.save(register);
    }
}
