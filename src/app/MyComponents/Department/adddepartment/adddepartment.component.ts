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

  company : Company = new Company();
  complist !:  any;
  department : Department = new Department();
  deplist !: any;
  constructor(private compserv : CompanyserviceService,private deptserv : DepartmentserviceService, private route : Router) { }

  ngOnInit(): void {
    this.compserv.getAllCompanies().subscribe(data=>{this.complist=data});
   // this.deplist.getAllDepartments().subscribe(data);
  }

  OnSubmit() {
    this.compserv.getCompanyById(this.department.company).subscribe(data=>this.company=data);
    this.deptserv.saveDepartment(this.department).subscribe(data=>{this.gotoViewDepartments()});
  }
  
  gotoViewDepartments() {
    return this.route.navigate(['viewdepartment']);
  }
 

}
