package com.romeovasil.VetApp.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "procedures")
@Data
public class Procedure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "price")
    private int price;
    @Column(name = "name")
    private String name;

    @ManyToMany
    @JoinTable(
            name="appointment_procedure",
            joinColumns = @JoinColumn(name="procedure_id"),
            inverseJoinColumns = @JoinColumn(name="appointment_id")
    )
    private List<Appointment> appointmentList;

}
