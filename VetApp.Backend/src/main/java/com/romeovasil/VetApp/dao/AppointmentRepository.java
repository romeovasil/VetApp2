package com.romeovasil.VetApp.dao;

import com.romeovasil.VetApp.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
