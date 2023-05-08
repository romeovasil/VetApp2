import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit{
  id:any=0 ;


  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
  }

}
