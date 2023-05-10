package com.romeovasil.VetApp.service;

import com.romeovasil.VetApp.dao.AppointmentRepository;
import com.romeovasil.VetApp.dao.ProcedureRepository;
import com.romeovasil.VetApp.dto.AppointmentProcedureDTO;
import com.romeovasil.VetApp.entity.Appointment;
import com.romeovasil.VetApp.entity.Procedure;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProcedureService {
    private final AppointmentRepository appointmentRepository;
    private final ProcedureRepository procedureRepository;

    @Autowired
    public ProcedureService(AppointmentRepository appointmentRepository, ProcedureRepository procedureRepository) {
        this.appointmentRepository = appointmentRepository;
        this.procedureRepository = procedureRepository;
    }


    @Transactional
    public void addProcedureToAppointment(AppointmentProcedureDTO appointmentProcedureDTO) {
        Appointment appointment = appointmentRepository.findById(appointmentProcedureDTO.getAppointment().getId())
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        Procedure procedure = procedureRepository.findById(appointmentProcedureDTO.getProcedure().getId())
                .orElseThrow(() -> new RuntimeException("Procedure not found"));

        appointment.addProcedure(procedure);
        appointmentRepository.save(appointment);
    }
}
