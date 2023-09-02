import { Component, NO_ERRORS_SCHEMA, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Asset } from 'src/app/Models/Asset';
import { Department } from 'src/app/Models/Department';
import { Employee } from 'src/app/Models/Employee';
import { AssetService } from 'src/app/Services/asset.service';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';

import { DepartmentserviceService } from 'src/app/Services/departmentservice.service';
import { DesignationService } from 'src/app/Services/designation.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
}) 


export class AddemployeeComponent implements OnInit {

  constructor(private compserv : CompanyserviceService ,
    private assetserv : AssetService,
    private deptserv : DepartmentserviceService,
    private desigserv : DesignationService,private router : Router,
    private empserv : EmployeeService) { }
  desiglist : any;
  complist  : any;
  assetlist !: Asset[]
  deptlist !: Department[]
  emp !: Employee;

  ngOnInit(): void {
        this.desigserv.getAllDesignations().subscribe(data=>this.desiglist=data);
        this.compserv.getAllCompanies().subscribe(data=>this.complist=data);
        this.assetserv.getAllAssets().subscribe(data=>this.assetlist=data)
  }

  OnSubmit()
  {
        this.empserv.saveEmployee(this.emp).subscribe(data=>this.goToViewEmployee());
  }

  public goToViewEmployee()
  {
    this.router.navigate(['viewemployee']);
  }
  
  getdeptbycompid(cid :number)
  {
    this.deptserv.getDepartmentByCompId(cid).subscribe(data=>this.deptlist=data);
  }
}
