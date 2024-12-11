package com.example.spring_boot_crud_operation_example.Repository;

import com.example.spring_boot_crud_operation_example.entity.Register;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RegisterRepository extends JpaRepository<Register,Long> {
    Optional<Register> findByEmail(String email);
}
