import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Models/Employee';
import { Observable } from 'rxjs';
import { GlobalComponents } from '../Global-Components';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http :HttpClient) { }

  appurl  : any = GlobalComponents.appUrl;
              
  base_url  = this.appurl+"employee/";

  public saveEmployee(emp : Employee): Observable<Employee[]>{
     return this.http.post<Employee[]>(`${this.base_url}`,emp);
  }

  public getAllEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.base_url}`);
  }

  public getEmpById(eid :number):Observable<Employee>
  {
    return this.http.get<Employee>(`${this.base_url}${eid}`);
  }
}
