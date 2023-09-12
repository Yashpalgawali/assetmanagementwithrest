import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Company } from 'src/app/Models/Company';
import { Department } from 'src/app/Models/Department';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';
import { DepartmentserviceService } from 'src/app/Services/departmentservice.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {

  company   : Company = new Company();
  complist !: any;
  department: Department = new Department();
  deplist  !: any;
  comp_id   : any;
  constructor(private compserv : CompanyserviceService,
              private deptserv : DepartmentserviceService,
              private route : Router) { }

  ngOnInit(): void {
    this.compserv.getAllCompanies().subscribe(data=>this.complist=data);
  }

  OnSubmit() {
    this.comp_id = this.department.company;
   alert("submitted value ="+this.comp_id);
   this.getCompanyByCompId(this.comp_id).subscribe(data=>this.company=data);
   alert("Result = "+this.company.comp_name);
  // alert("Got company by ID = "+this.department.company.comp_id+"\n Company Name "+this.department.company.comp_name);
   //this.deptserv.saveDepartment(this.department).subscribe(data=>{this.gotoViewDepartments()});
  }
  
  getCompanyByCompId(cid:any)
  {
   return this.compserv.getCompanyById(this.department.company);
  }
  gotoViewDepartments() {
    return this.route.navigate(['viewdepartment']);
  }
 

}
