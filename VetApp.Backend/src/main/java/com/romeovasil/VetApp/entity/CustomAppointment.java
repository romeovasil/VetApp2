package com.romeovasil.VetApp.entity;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(
        name="customAppointment",
        types = {Appointment.class}
)
public interface CustomAppointment {
    @Value("#{target.id}")
    long getId();
    String getAnimal();

    String getDate();
    String getTime();
    String getDoctorName();
    String getDiagnostic();
    String getStatus();

    List<Procedure> getProcedureList();
}
