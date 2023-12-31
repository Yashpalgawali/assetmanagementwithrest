import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Designation } from '../Models/Designation';
import { GlobalComponents } from '../Global-Components';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  designation  : Designation = new Designation();
  constructor(private http: HttpClient) { }

  appurl  : any = GlobalComponents.appUrl;
  
  base_url= this.appurl+"designation/";

  public saveDesignation(designation : Designation):Observable<Designation[]>
  {
   
    return this.http.post<Designation[]>(`${this.base_url}`,this.designation);
  }

  public getAllDesignations():Observable<Designation[]>
  {
    return this.http.get<Designation[]>(`${this.base_url}`);
  }
  public getDesignationById(desig_id : number):Observable<Designation>
  {
    return this.http.get<Designation>(`${this.base_url}${desig_id}`);
  }

  public updateDesignation(designation : Designation):Observable<Designation[]>
  {
    return this.http.post<Designation[]>(`${this.base_url}`,designation);
  }
}
