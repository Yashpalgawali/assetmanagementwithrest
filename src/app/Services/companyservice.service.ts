import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../Models/Company';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  company : Company = new Company();

  baseUrl = "http://localhost:7979/company/";
  constructor(private http: HttpClient) { }

  public getAllCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(`${this.baseUrl}`);
  }

  public saveCompany(company : Company):Observable<Company>
  {
    return this.http.post<Company>(`${this.baseUrl}`,company);
  }

  public getCompanyById(cid : number):Observable<Company>
  {
    return this.http.get<Company>(`${this.baseUrl}${cid}`);
  }

  public updateCompany(company :Company):Observable<Company[]>
  {
    return this.http.post<Company[]>(`${this.baseUrl}`,company);
  }
}
