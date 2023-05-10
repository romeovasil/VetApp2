package com.romeovasil.VetApp.service;

import com.romeovasil.VetApp.dao.AppointmentRepository;
import com.romeovasil.VetApp.entity.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class DoctorService {

    private final AppointmentRepository appointmentRepository;


    @Autowired
    public DoctorService(AppointmentRepository appointmentRepository){
        this.appointmentRepository=appointmentRepository;
    }

    public Map<String, List<String>> getAllDoctors() {
        List<Appointment> appointments = appointmentRepository.findAll();
        List<String> doctors = appointments.stream()
                .map(Appointment::getDoctorName)
                .distinct()
                .collect(Collectors.toList());


        Map<String, List<String>> result = new HashMap<>();
        result.put("doctors", doctors);
        return result;
    }
}
