package com.example.spring_boot_crud_operation_example.Response;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Component
public class ResponseStructure<T> {
    private int statusCode;
    private String description;
    private String message;
    private LocalDateTime creaionTime;
    private T data;
}
