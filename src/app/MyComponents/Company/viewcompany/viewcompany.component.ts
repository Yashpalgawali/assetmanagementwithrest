import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data, error } from 'jquery';
import { Company } from 'src/app/Models/Company';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';

@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.css']
})
export class ViewcompanyComponent implements OnInit {

  cid!: number ;

  complist !: Company[];
  company   : Company= new Company();

  constructor(private compserv : CompanyserviceService, private router:Router) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies()
  {
    return this.compserv.getAllCompanies().subscribe(data=>this.complist=data);
  }
  
  getCompById(cid: any) {
    this.router.navigate(['editcompbyid',cid]) ;
    // return this.compserv.getCompanyById(cid).subscribe(data=>{this.company=data});
  }

}