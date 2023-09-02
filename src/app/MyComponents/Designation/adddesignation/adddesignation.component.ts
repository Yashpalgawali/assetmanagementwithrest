import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Designation } from 'src/app/Models/Designation';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-adddesignation',
  templateUrl: './adddesignation.component.html',
  styleUrls: ['./adddesignation.component.css']
})
export class AdddesignationComponent implements OnInit {

  designation : Designation = new Designation();
  desig_id !: number;
  
  constructor(private desigserv : DesignationService,private route  : Router) { }

  ngOnInit(): void {
  }

  OnSubmit()
  {
    this.desigserv.saveDesignation(this.designation).subscribe(data=>this.goToViewDesignations());
  }

  public goToViewDesignations()
  {
    this.route.navigate(['viewdesignations']);
  }
  
}
