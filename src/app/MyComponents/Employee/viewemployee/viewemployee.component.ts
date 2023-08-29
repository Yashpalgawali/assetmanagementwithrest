import { Component, OnInit } from '@angular/core';
import { DepartmentserviceService } from 'src/app/Services/departmentservice.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private deptserv : DepartmentserviceService,private empserv: EmployeeService) { }
  emplist : any
  ngOnInit(): void {
    this.empserv.getAllEmployees().subscribe(data=>this.emplist=data);
  }

  getEmpById(empid :number)
  {

  }

}
