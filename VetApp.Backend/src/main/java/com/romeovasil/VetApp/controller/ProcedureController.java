package com.romeovasil.VetApp.controller;

import com.romeovasil.VetApp.dto.AppointmentProcedureDTO;
import com.romeovasil.VetApp.entity.Appointment;
import com.romeovasil.VetApp.entity.Procedure;
import com.romeovasil.VetApp.service.ProcedureService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/procedure")
public class ProcedureController {

    private final ProcedureService procedureService;

    public ProcedureController(ProcedureService procedureService){
        this.procedureService=procedureService;
    }

    @PostMapping("/addNewProcedureToAppointment")
    public void addProcedureToAppointment(@RequestBody AppointmentProcedureDTO appointmentProcedureDTO){
        this.procedureService.addProcedureToAppointment(appointmentProcedureDTO);
    }

}
