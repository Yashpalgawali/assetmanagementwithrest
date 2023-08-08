import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Company } from 'src/app/Models/Company';
import { Department } from 'src/app/Models/Department';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {

  company : Company = new Company();
  complist !:  Company[];
  department : Department = new Department();
  constructor(private compserv : CompanyserviceService) { }

  ngOnInit(): void {
    this.compserv.getAllCompanies().subscribe(data=>this.complist=data);
    alert(this.complist);
  }

  OnSubmit(){
    alert("clicked");
  }
}
