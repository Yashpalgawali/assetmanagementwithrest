import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../Models/Department';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {

  constructor(private http: HttpClient) { }

  base_url="http://localhost:7979/department/";

  public saveDepartment(department : Department):Observable<Department[]>
  {
    
    return this.http.post<Department[]>(`${this.base_url}`,department);
  }

  public updateDepartment(department : Department):Observable<Department[]>
  {
    alert("inside dept service "+department.company+"\n Dept Name = "+department.dept_name);

    return this.http.put<Department[]>(`${this.base_url}updatedepartment`,department);
  }

  
  public getAllDepartments():Observable<Department[]>
  {
    return this.http.get<Department[]>(`${this.base_url}`);
  }

  public getDepartmentById(dept_id : number)
  {
    return this.http.get<Department>(`${this.base_url}${dept_id}`);
  }
}
