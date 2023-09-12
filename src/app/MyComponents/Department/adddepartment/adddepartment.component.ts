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
<<<<<<< HEAD
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
=======
  constructor(private compserv : CompanyserviceService,private deptserv : DepartmentserviceService, private route : Router) { }

  ngOnInit(): void {
    this.compserv.getAllCompanies().subscribe(data=>{this.complist=data});
  }

  OnSubmit() {
    
    this.compserv.getCompanyById(this.department.company).subscribe(data=>this.department.company);
    alert("Department data is "+this.department.dept_name+"\n Company id is "+this.department.company);
    //this.deptserv.saveDepartment(this.department).subscribe(data=>{this.gotoViewDepartments()});
  }
  
>>>>>>> 96ec1ec577788df47a9998cc6eec7b5c116aa91b
  gotoViewDepartments() {
    return this.route.navigate(['viewdepartment']);
  }
 

}
