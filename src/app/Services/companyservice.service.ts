import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../Models/Company';
import { Observable } from 'rxjs';
import { GlobalComponents } from '../Global-Components';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  company : Company = new Company();
  appurl  : any = GlobalComponents.appUrl;
  
  baseUrl = this.appurl+"company/";
 
  constructor(private http: HttpClient) { }

  public getAllCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(`${this.baseUrl}`);
  }

  public saveCompany(company : Company):Observable<Company>
  {
    return this.http.post<Company>(`${this.baseUrl}`,company);
  }

  public getCompanyById(cid : any):Observable<Company>
  {
    return this.http.get<Company>(`${this.baseUrl}${cid}`);
  }
<<<<<<< HEAD
  /*public getCompanyById(cid : any):Observable<Company>
  {
    return this.http.get<Company>(`${this.baseUrl}${cid}`);
  }*/
=======
>>>>>>> 96ec1ec577788df47a9998cc6eec7b5c116aa91b

  public updateCompany(company :Company):Observable<Company[]>
  {
    return this.http.post<Company[]>(`${this.baseUrl}`,company);
  }
}
