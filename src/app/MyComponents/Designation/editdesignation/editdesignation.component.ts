import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Designation } from 'src/app/Models/Designation';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-editdesignation',
  templateUrl: './editdesignation.component.html',
  styleUrls: ['./editdesignation.component.css']
})
export class EditdesignationComponent implements OnInit {

  desig_id !: number;
  designation : Designation = new Designation();
  constructor(private desigserv : DesignationService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
   this.desig_id = this.route.snapshot.params['id'];
   this.desigserv.getDesignationById(this.desig_id).subscribe(data=>this.designation=data);
  }

  public OnSubmit()
  {
    this.updateDesignations(this.designation);
  }

  public updateDesignations(designation :Designation)
  {
    return this.desigserv.updateDesignation(this.designation).subscribe(data=>this.gotToViewDesignations());
  }

  public gotToViewDesignations()
  {
    this.router.navigate(['viewdesignations']);
  }
}
