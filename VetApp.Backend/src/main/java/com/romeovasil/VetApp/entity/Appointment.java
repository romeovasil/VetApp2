package com.romeovasil.VetApp.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

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
    private String doctorName;
    @Column(name = "diagnostic")
    private String diagnostic;
    @Column(name = "status")
    private String status;
    @Column(name = "procedures")
    private String procedures;

//    @ManyToMany
//    @JoinTable(
//            name="appointment_procedure",
//            joinColumns = @JoinColumn(name="appointment_id"),
//            inverseJoinColumns = @JoinColumn(name="procedure_id")
//    )
//    private List<Procedure> procedureList;
//
//    public void addProcedure(Procedure procedure){
//        if(procedureList ==null){
//            procedureList=new ArrayList<>();
//        }
//        this.procedureList.add(procedure);
//    }

}

