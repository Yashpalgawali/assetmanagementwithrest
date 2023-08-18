import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-viewdesignation',
  templateUrl: './viewdesignation.component.html',
  styleUrls: ['./viewdesignation.component.css']
})
export class ViewdesignationComponent implements OnInit {

  desiglist :  any;
  desig_id  !: number;

  constructor(private desigserv : DesignationService,private router :Router) { }

  ngOnInit(): void {
    this.getAllDesignations();
  }


  public getAllDesignations()
  {
    return this.desigserv.getAllDesignations().subscribe(data=>this.desiglist=data);
  }

  public getDesigById(desig_id : number)
  {
    //alert("Designation ID is ->> "+desig_id);
    this.router.navigate(['editdesigbyid',desig_id]);
  }
}
