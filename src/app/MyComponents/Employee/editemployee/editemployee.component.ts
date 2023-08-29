import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Company } from 'src/app/Models/Company';
import { Designation } from 'src/app/Models/Designation';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';
import { DesignationService } from 'src/app/Services/designation.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  constructor(private empserv :EmployeeService,private compserv : CompanyserviceService,private desigserv : DesignationService) { }

  complist !: Company[];
  desiglist!: Designation[];

  ngOnInit(): void {
      this.desigserv.getAllDesignations().subscribe(data=>this.desiglist=data);
      this.compserv.getAllCompanies().subscribe(data=>this.complist=data);
  }


  OnSubmit()
  {

  }
}
