package com.romeovasil.VetApp.dao;


import com.romeovasil.VetApp.entity.Procedure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface ProcedureRepository extends JpaRepository<Procedure,Long> {
}
