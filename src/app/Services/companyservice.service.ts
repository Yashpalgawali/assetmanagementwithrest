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

  public updateCompany(company :Company):Observable<Company[]>
  {
    return this.http.post<Company[]>(`${this.baseUrl}`,company);
  }
}
