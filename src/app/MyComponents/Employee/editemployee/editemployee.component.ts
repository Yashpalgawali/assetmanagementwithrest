import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { Company } from 'src/app/Models/Company';
import { Designation } from 'src/app/Models/Designation';
import { Employee } from 'src/app/Models/Employee';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';
import { DesignationService } from 'src/app/Services/designation.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

<<<<<<< HEAD
  constructor(private empserv :EmployeeService,private compserv : CompanyserviceService,private desigserv : DesignationService,
    private route : ActivatedRoute) { }
=======
  constructor(private empserv  : EmployeeService,
              private compserv : CompanyserviceService,
              private desigserv: DesignationService,
              private route    : ActivatedRoute) { }
>>>>>>> 96ec1ec577788df47a9998cc6eec7b5c116aa91b

  complist !: Company[];
  desiglist!: Designation[];
    emp_id !: number;
<<<<<<< HEAD
    emp : Employee = new Employee();  
=======
    emp : Employee = new Employee();
>>>>>>> 96ec1ec577788df47a9998cc6eec7b5c116aa91b
  ngOnInit(): void {
      this.desigserv.getAllDesignations().subscribe(data=>this.desiglist=data);
      this.compserv.getAllCompanies().subscribe(data=>this.complist=data);
      this.emp_id = this.route.snapshot.params['id'];
      this.empserv.getEmpById(this.emp_id).subscribe(data=>this.emp=data);
  }
<<<<<<< HEAD

=======
  
>>>>>>> 96ec1ec577788df47a9998cc6eec7b5c116aa91b

  OnSubmit()
  {

  }
}
