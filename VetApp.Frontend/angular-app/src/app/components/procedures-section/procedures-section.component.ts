import {Component, OnInit} from '@angular/core';
import {ProceduresService} from "../../services/procedures.service";
import {Procedure} from "../../common/procedure";

@Component({
  selector: 'app-procedures-section',
  templateUrl: './procedures-section.component.html',
  styleUrls: ['./procedures-section.component.scss']
})
export class ProceduresSectionComponent implements OnInit{

  procedures:Procedure[]=[];
  constructor(private proceduresService:ProceduresService) {
  }

  ngOnInit(): void {
    this.proceduresService.getProcedures().subscribe(data=>{
        this.procedures=data;
    });
  }

}
