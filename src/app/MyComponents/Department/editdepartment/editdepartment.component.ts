import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Company } from 'src/app/Models/Company';
import { Department } from 'src/app/Models/Department';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';
import { DepartmentserviceService } from 'src/app/Services/departmentservice.service';

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.css']
})
export class EditdepartmentComponent implements OnInit {

  constructor(private deptserv : DepartmentserviceService,private compserv: CompanyserviceService, 
              private route : ActivatedRoute, private router : Router ) { }

  company    : Company = new Company();
  
  department : Department = new Department();
  deplist    : any;
  complist   : any;
  dept_id    !: number;
 
  ngOnInit() : void {

    this.dept_id = this.route.snapshot.params['id'];
    this.deptserv.getDepartmentById(this.dept_id).subscribe(data=>{this.department=data});
    this.compserv.getAllCompanies().subscribe(data=>{this.complist=data});
  }

  public OnSubmit()
  {
    this.updateDepartment();
  }
  
  public updateDepartment()
  {
    alert("department Object \n Dept_id "+this.department.dept_id+" \n Name = "+this.department.dept_name+"\n Company = "+this.department.company);
    this.deptserv.updateDepartment(this.department);
  }

  gotoviewDepartments()
  {
    this.router.navigate(['viewdepartment']);
  }
}
