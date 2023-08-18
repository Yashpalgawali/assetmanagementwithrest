import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Department } from 'src/app/Models/Department';
import { DepartmentserviceService } from 'src/app/Services/departmentservice.service';

@Component({
  selector: 'app-viewdepartments',
  templateUrl: './viewdepartments.component.html',
  styleUrls: ['./viewdepartments.component.css']
})
export class ViewdepartmentsComponent implements OnInit {

  constructor(private deptserv: DepartmentserviceService , private route : Router) { }

  ngOnInit(): void {
   this.getAllDepartments(); 
  }

  deplist !: any;
  department : Department = new Department();
  dept_id !: number;

  public getAllDepartments()
  {
    return this.deptserv.getAllDepartments().subscribe(data=>this.deplist=data);
  }

  public getDeptByDeptId(dept_id : any)
  {
    this.route.navigate(['editdeptbyid',dept_id]);
  }
}
