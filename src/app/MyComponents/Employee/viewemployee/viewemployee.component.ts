import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentserviceService } from 'src/app/Services/departmentservice.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private deptserv : DepartmentserviceService,private empserv: EmployeeService, private router : Router) { }
  emplist : any
  ngOnInit(): void {
    this.empserv.getAllEmployees().subscribe(data=>this.emplist=data);
  }

  getEmpById(empid :number)
  {
    this.router.navigate(['editempbyid',empid]);
  }

<<<<<<< HEAD
  public getAssetAssignedHistByEmpId(empid : number)
  {
    this.router.navigate(['viewassetassignedhistbyid',empid]);
  }
=======
>>>>>>> 96ec1ec577788df47a9998cc6eec7b5c116aa91b
}
