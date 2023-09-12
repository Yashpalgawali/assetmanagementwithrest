import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Models/Employee';
import { Observable } from 'rxjs';
import { GlobalComponents } from '../Global-Components';
<<<<<<< HEAD
import { AssetAssignHistory } from '../Models/AssetAssignHistory';

=======
>>>>>>> 96ec1ec577788df47a9998cc6eec7b5c116aa91b

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http :HttpClient) { }

  appurl  : any = GlobalComponents.appUrl;
<<<<<<< HEAD
=======
              
>>>>>>> 96ec1ec577788df47a9998cc6eec7b5c116aa91b
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
<<<<<<< HEAD

  public getAllAssignedAssets()
  {
    return  this.http.get(`${this.base_url}viewassignedassets`);
  }

  exportassignedassets(): Observable<Blob> {
    return this.http.get(`${this.base_url}/exportassignedassets/excel`, {
      responseType: 'blob'
    });
  }

  public getEmpHistById(id : number):Observable<AssetAssignHistory[]>
  {
    return this.http.get<AssetAssignHistory[]>(`${this.base_url}viewemphistbyempid/${id}`);
  }
=======
>>>>>>> 96ec1ec577788df47a9998cc6eec7b5c116aa91b
}
