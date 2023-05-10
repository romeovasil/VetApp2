package com.romeovasil.VetApp.dto;

import com.romeovasil.VetApp.entity.Appointment;
import com.romeovasil.VetApp.entity.Procedure;
import lombok.Data;

@Data
public class AppointmentProcedureDTO {
    private Appointment appointment;
    private Procedure procedure;
}
