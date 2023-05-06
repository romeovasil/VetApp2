package com.romeovasil.VetApp.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "appointment")
@Data
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "animal")
    private String animal;
    @Column(name = "data")
    private String data;
    @Column(name = "time")
    private String time;
    @Column(name = "doctor_name")
    private String doctor_name;
    @Column(name = "diagnostic")
    private String diagnostic;
    @Column(name = "status")
    private String status;
    @Column(name = "procedures")
    private String procedures;


}

