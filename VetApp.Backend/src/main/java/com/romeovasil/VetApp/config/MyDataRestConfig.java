package com.romeovasil.VetApp.config;


import com.romeovasil.VetApp.entity.Appointment;
import com.romeovasil.VetApp.entity.Procedure;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(Appointment.class);
        config.exposeIdsFor(Procedure.class);
    }
}