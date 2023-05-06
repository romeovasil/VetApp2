package com.romeovasil.VetApp.dao;

import com.romeovasil.VetApp.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
